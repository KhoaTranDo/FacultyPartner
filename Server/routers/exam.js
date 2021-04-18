const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
var passport = require('passport')
const User = require("../models/account");
const ExamController = require("../controllers/exam");


router.get("/", ExamController.index);
// router.get("/:id", ExamController.addExam);
//router.get("/import", ExamController.importExam);  
router.get("/import", ExamController.readExam);
router.get("/import/:slug", ExamController.importSlug);
router.put("/import/edit/:slug", ExamController.editexam);
router.put("/infor/:id/edit", ExamController.infor);
module.exports = router;