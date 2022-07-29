const AdsModel = require('../db/models/adsModel')
const {cloudinaryUpload} = require('../services/imgUploadService')
module.exports = {
    createAd: async (req, res) => {
      if (req.method == "POST") {
        const path = req.file.path;
        console.log(req.file.path);
        const folder = "sourav/adsImgs";
        await cloudinaryUpload(path, folder).then((result) => {
          const {
            ads_link
          } = req.body;
  
          const data = {
            img: result.url,
            ads_link:ads_link
          };
  
          const adsDetails = AdsModel(data);
          adsDetails.save((err, result) => {
            if (err) {
              res.status(401).json({
                success: 0,
                message: "adding faild",
                error: err,
              });
            }
  
            res.status(201).json({
              success: 1,
              message: "successfully added!",
              data: result,
            });
          })
        }).catch(error=>{
          if (error) {
              console.log(error);
              res.status(401).json({
                success: 0,
                message: "image upload faild",
                error: error,
              });
            }
        });
      }
    },
  
  
    getAds:async(req, res)=>{
      try{
          await AdsModel.find({}).sort('createdAt').exec((err,result)=>{
              if(err) {
                  console.log(err);
                  res.status(401).json({
                      success: 0,
                      message: "not found",
                      error: error,
                    });
              }
  
              else if(!result || result.length==0){
                  res.status(401).json({
                      success: 0,
                      message: "database is empty",
                    });
              }
  
              else{
                  res.status(200).json({
                      success: 1,
                      message: "ok",
                      data: result
                  })
              }
          })
      }
  
      catch(error) {
          res.status(501).json({
              success: 0,
              message: "something went wrong",
              error: error,
            });
      }
      
    },
  
  
    deleteAds:async (req, res) => {
      try{
          const id = req.params.id;
          await AdsModel.findByIdAndDelete({_id:id}).exec((err,result) => {
              if(err){
                  console.log(err);
                  res.status(401).json({
                      success: 0,
                      message: "deletation faild",
                      error: err
                  })
              }
  
              res.status(200).json({
                  success:1,
                  message: "successfully deleted",
                  res:result
              })
          })
      }
      catch(error) {
          res.status(501).json({
              success: 0,
              message: "something went wrong",
              error: error,
            });
      }
    }
  };