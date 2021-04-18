const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const UserSchema = require("../models/account");
const config = require("config");
const spawn = require("child_process").spawn;

class Exam {
  index(req, res) {
    res.json({ ad: "ddd" });
  }
  addExam(req, res) {
    res.json({ id: req.params.id });
  }
  importExam(req, res) {
    res.json({ ad: "import" });
  }
  readExam(req, res) {
    var spawn = require("child_process").spawn;
    var a=[]
    // 
    var tenfile='de1.docx'
    var process = spawn('python',["Readword.py",tenfile] );
  
    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        // console.log(data.toString());
        a=JSON.parse(data.toString())
        res.send(a)
    })
    
    process.stderr.on('data',
    function (data) {
      console.log('err data: ' + data);
    }
);
    

  }
  importSlug(req, res) {
    res.json({ addd: "importSlug" });
  }
  editexam(req, res) {
    res.json({ addd: "editexam" });
  }
  infor(req, res) {
    res.json({ addd: "infor" });
  }
}

module.exports = new Exam();
