const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const UserSchema = require("../models/account");
const config = require("config");

class Exam {
   index(req, res) {
        res.json({ad:"ddd"})
  }
   addExam(req,res){
       res.json({id:req.params.id   })
   }
   importExam(req,res){
    res.json({ad:"import"})
   }
   importSlug(req,res){
       res.json({addd:'importSlug'});
   }
   editexam(req,res){
    res.json({addd:'editexam'});
   }
   infor(req,res){
    res.json({addd:'infor'});
   }
   uploadfile(req,res){
                        //multer
                    var multer  = require('multer');
                    var storage = multer.diskStorage({
                        destination: function (req, file, cb) {
                        cb(null, 'public/upload')
                        },
                        filename: function (req, file, cb) {
                        cb(null, Date.now()  + "-" + file.originalname)
                        }
                    });  
                    var upload = multer({ 
                        storage: storage,
                        fileFilter: function (req, file, cb) {
                            console.log(file);
                            if(file.mimetype=="image/bmp" || file.mimetype=="image/png"  || file.mimetype=="image/jpeg"  || file.mimetype=="image/docx"){
                                cb(null, true)
                            }else{
                                return cb(new Error('Only image are allowed!'))
                            }
                        }
                    }).single("fileDocx"); 
    }
    xulycauhoi(res,req){
        res.json({addd:'editexam'});
    }
    xulytronde(res,req){
        res.json({add:"xulytronde"});
    }
    xulytronderiengle(res,req){
        res.json({add:"xulytronderiengle"});
    }
}

module.exports = new Exam();
