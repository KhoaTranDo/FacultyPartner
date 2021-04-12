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
}

module.exports = new Exam();
