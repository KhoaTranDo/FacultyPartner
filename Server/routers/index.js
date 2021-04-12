const accountRouter = require('./account');
const ExamRouter = require("./exam");

function route(app){
    // Chứa các router chính
    // app.use("/account",accountRouter: nhánh con bên trong)
    app.get("/ada", (req, res) => {
        res.send("Hello World!");
      });
   app.use('/account',accountRouter)
   app.use('/exam',ExamRouter)
}

module.exports = route;