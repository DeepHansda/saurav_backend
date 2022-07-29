const AppModel = require("../db/models/appModel");
const { cloudinaryUpload } = require("../services/imgUploadService");
module.exports = {
  createAppDetails: async (req, res) => {
    if (req.method == "POST") {
      const path = req.file.path;
      const folder = "sourav/appsImgs";
      await cloudinaryUpload(path, folder).then((result) => {
        const {
          number,
          title,
          desc,
          addi_desc,
          download_link,
          features,
          referral_code,
          signup_bonus,
          refer_bonus,
          withdrawable_bonus,
        } = req.body;

       const parsedFeatures = JSON.parse(features)

        const data = {
          number:number,
          img: result.url,
          title: title,
          desc: desc,
          addi_desc: addi_desc,
          download_link: download_link,
          navigation: title,
          features: parsedFeatures,
          referral_code:referral_code,
          signup_bonus: signup_bonus,
          refer_bonus: refer_bonus,
          withdrawable_bonus: withdrawable_bonus,
        };

        const appDetails = AppModel(data);
        appDetails.save((err, result) => {
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


  getAppDetails:async(req, res)=>{
    try{
        await AppModel.find({}).sort("number").exec((err,result)=>{
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


  delAppDetails:async (req, res) => {
    try{
        const id = req.params.id;
        await AppModel.findByIdAndDelete({_id:id}).exec((err,result) => {
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
