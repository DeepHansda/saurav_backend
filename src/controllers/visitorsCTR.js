const VisitorModel = require("../db/models/visitorsModel");

module.exports = {
  createVisitor: async (req, res) => {
    try {
      const data = req.body;
      const visitor = VisitorModel(data);

      await visitor.save((err, result) => {
        if (err) {
          res.status(400).json({
            success:0,
            message: "Error saving Visitor",
            error: err,
          });
        }

        if (result) {
          res.status(200).json({ 
            success:1,
            message: "Successfully Saved !" });
        }
      });
    } catch (err) {
      res.status(500).json({
        success:0,
        message: "something went wrong.",
        error: err,
      });
    }
  },


  getVisitors :async(req,res)=>{
    try {
        VisitorModel.find({}).sort('createdAt').exec((error,result)=>{
            if (error) {
                res.status(401).json({
                    success:0,
                    message:"not found",
                    error: error,
                })
            }

            else if(!result || result.length==0){
                res.status(401).json({
                    success:0,
                    message:"database is empty",
                })
            }

            else{
                res.status(200).json({
                    success:1,
                    data:result,
                })
            }
        })
    }
    catch (err) {
        res.status(500).json({
            success:0,
            message: "something went wrong.",
            error: err,
          });
    }
  },

  deleteVisitor: async (req, res) => {
    try {
        const id = req.params.id;
        await VisitorModel.findByIdAndDelete({_id:id}).exec((err, result)=>{
            if (err) {
                res.status(401).json({
                    success:0,
                    message: "Error deleting Visitor",
                    error: err,
                })
            }
            if (result){
                res.status(200).json({
                    success:1,
                    message: "Successfully deleted"})
            }
        })
    } 
    catch (err) {
      res.status(500).json({
        success:0,
        message: "something went wrong.",
        error: err,
      });
    }
  },
};
