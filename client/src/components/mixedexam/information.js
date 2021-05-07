import { Component } from "react";
import axios from "axios";
class Informationexam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quanlityExam: 0,
      quanlityQs:0
    };
  }

  SubmitData = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:6001/exam/import");
    if (data) {
      this.props.dataexam(data.data);
    } else {
      this.props.dataexam("error");
    }
    console.log(data);
  };
  HandleQuanlityEx = (e) => {
    e.preventDefault();
    let a=this.state.quanlityExam
    if (e.target.name === "up") {
      if(a<5){
      this.setState({
        quanlityExam: a + 1,
      });
    }
    } else {
      if(a>0){
      this.setState({
        quanlityExam: a - 1,
      });
    }
    }
    console.log(a);
  };
  HandleQuanlityQs = (e) => {
    e.preventDefault();
    let a=this.state.quanlityQs
    if (e.target.name === "up") {
      if(a<50){
      this.setState({
        quanlityQs: a + 5,
      });
    }
    } else {
      if(a>0){
      this.setState({
        quanlityQs: a - 5,
      });
    }
    }
    console.log(a);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 mx-auto">
              <div className="bg-white p-5 rounded border">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <form>
                        <div className="row">
                          <label
                            htmlFor="user_name"
                            className="col-md-12 col-form-label text-md-left"
                          >
                            Tải tệp lên
                          </label>

                          <div className="input-group col-sm-12 mb-3">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile03"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile03"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-sm-12 form-group">
                            <label>Tiêu đề </label>
                            <input type="text" className="form-control"  maxlength="50"/>
                          </div>{" "}
                          {/* form-group end.// */}
                          <div className="col form-group">
                            <label>Thời gian</label>
                            <input type="text" className="form-control"  maxlength="10" />
                          </div>{" "}
                          {/* form-group end.// */}
                        </div>{" "}
                        {/* form-row end.// */}
                        {/* form-group end.// */}
                        <div className="form-row">
                          <div className="col form-group">
                            <label>ID đề gốc</label>
                            <input type="text" className="form-control" />
                          </div>{" "}
                          {/* form-group end.// */}
                          <div className="col form-group">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" maxlength="10"/>
                          </div>{" "}
                          {/* form-group end.// */}
                        </div>
                        <hr className="border-bottom" />
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={this.SubmitData}
                          >
                            Tạo
                          </button>
                        </div>
                        {/* form-group// */}
                        <div className="form-row">
                          <div className="col-sm-3 form-group">
                            <label>Số lượng đề</label><br/>
                            <>
                            <div className="number-input">
                              <button
                                name="down"
                                onClick={this.HandleQuanlityEx}
                              ></button>
                              <input
                                className="quantity"
                                min="0"
                                name="quantity"
                                type="number"
                                value={this.state.quanlityExam}
                              ></input>
                              <button
                                onClick={this.HandleQuanlityEx}
                                className="plus"
                                name="up"
                              ></button>
                            </div>
                            </>
                          </div>
                          <div className="col-sm-3 form-group">
                            <label>Số câu trăc nghiệm</label>
                            <br/>
                            <>
                            <div className="number-input">
                              <button
                                name="down"
                                onClick={this.HandleQuanlityQs}
                              ></button>
                              <input
                                className="quantity"
                                min="0"
                                name="quantity"
                                type="number"
                                value={this.state.quanlityQs}
                              ></input>
                              <button
                                onClick={this.HandleQuanlityQs}
                                className="plus"
                                name="up"
                              ></button>
                            </div>
                            </>
                          </div>{" "}
                          {/* form-group end.// */}
                          <div className="form-group col-sm-4 m-auto ">
                            <div className="form-group form-check float-left">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Xáo trộn câu hỏi
                              </label>
                            </div>
                            <div className="form-group form-check float-left">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Xáo trộn câu trả lời
                              </label>
                            </div>
                          </div>{" "}
                          {/* form-group end.// */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Informationexam;
