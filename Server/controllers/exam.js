const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const UserSchema = require("../models/account");
const config = require("config");
const spawn = require("child_process").spawn;
const qr = require("qrcode");
const lodash =require('lodash')

// Call model 
// const Role = require('../models/Role')
/**
 * Role.findOne({ slug: req.params.slug })
            .then(roles => res.render('lessor/show', { roles: mongooseToObject(roles) }))
            .catch(next)
 * Find
 * Findone
 * save
 * findByid
 * Put
 * Updatemany
 *  Role.updateMany({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/lessor/stores/post'))
            .catch(next)
  DeleteOne
*/
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
    // Thư viện spawn để chạy python
    var spawn = require("child_process").spawn;
    // Get questions data from python
    let getRawanswer = "";
    // Exam object
    var exam = {};
    // Lấy ảnh đã mã hoá
    const url = 'req.file.filename';
    // Kiểm tra qr rỗng không
    if (url.length === 0) res.send("Empty Data!");
    // Xuất qr code
   qr.toDataURL(url, (err, src) => {
     if (err) res.send("Error occured");
     exam["image"] = src;
    });
    // Lấy file name
    var tenfile = "de3.docx"; //vd de3.docx
    var process = spawn("python", ["Readword.py", tenfile]);

    //Tạo slug phần biệt
     exam["slug"] = 'req.file.filename';

    // Chạy python
    process.stdout
      .on("data", function (data) {
        // console.log(data.toString());
        getRawanswer += data.toString();
      })
      .on("end", () => {
        exam["rawquestion"] = JSON.parse(getRawanswer);
        var arrmixexam=[]
        arrmixexam=mixquestion(exam, 3)
        // In ra ket qua
        exam["exammixed"] = arrmixexam;
        res.send(exam);
      });
    process.stderr.on("data", function (data) {
      console.log("err data: " + data);
    });
  }

  getqr(req, res) {
    const url = req.body.url;
    if (url.length === 0) res.send("Empty Data!");
    qr.toDataURL(url, (err, src) => {
      if (err) res.send("Error occured");
      console.log(src);
      res.send(JSON.stringify(src));
    });
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
function mixquestion(exam, sode) {
  // console.log(exam["rawquestion"]);
  var data = {};
  data[sode];
  for (var i = 0; i < sode; i++) {
    var data1={}
    var arr = lodash.shuffle(exam["rawquestion"]);
    data1["idexam"] = Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)
    data1["questions"] = arr;
    data[i]=data1
  }

  return data;
}
// function shuffle(array) {
//   var b=[]
//   do{
//     for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       if(!b.includes(array[j])){
//         b.push(array[j])
//       }
      
//     }
//   }
//   while(b.length!=array.length)
//   return b;

// }
module.exports = new Exam();
