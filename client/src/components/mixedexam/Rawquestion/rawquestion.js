import { Component } from "react";

class Rawquestion extends Component {
  constructor(props) {
    super(props);
  }
  Renderdata = () => {
    let data = this.props.rawquestion["rawquestion"];
    if (data)
      return data.map((value, index) => {
     
        return (
          <div key={index} className="col-sm-12 pt-3">
            <div className="card">
              <h5 className="card-header">
                Question {index + 1}:{value["Question"]}
              </h5>
              <div className="card-body">
                {value["Answer"].map((index) => {
                  if (value["Trueanswer"].includes(index)) {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={"raw" + value["Question"]}
                          id="exampleRadios1"
                          defaultChecked
                          value={value["Question"]}
                        />
                        <label className="form-check-label"> {index}</label>
                      </div>
                    );
                  } else {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={"raw" + value["Question"]}
                          id="exampleRadios1"
                          value={value["Question"]}
                        />
                        <label className="form-check-label"> {index}</label>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="card-footer text-muted">
                <button
                  type="button"
                  style={{ width: "45%" }}
                  className="btn btn-outline-warning d-inline  ml-1 float-left"
                >
                  Sửa
                </button>
                <button
                  type="button"
                  style={{ width: "45%" }}
                  className="btn btn-outline-danger  ml-1 float-right "
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        );
      });
  };
  render() {
    console.log(this.props.rawquestion);
    return (
      <>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <div
                className="btn btn-link collapsed p-0"
                style={{ textDecoration: "none" }}
                type="button"
                data-toggle="collapse"
                data-target="#collapse"
                aria-expanded="false"
                aria-controls="#collapse"
              >
                <h3>Đề gốc</h3>
              </div>
            </h2>
          </div>
          <div
            id="collapse"
            className="collapse"
            aria-labelledby="#heading"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <div className="container">
                <div className="row mt-3">{this.Renderdata()}</div>
              </div>
            </div>
          </div>
          {/* <div className="card-footer text-muted" id="headingOne">
            <button
              type="button"
              style={{ width: "45%" }}
              className="btn btn-outline-success col-2  ml-1 float-xl-right "
            >
              Thêm câu hỏi
            </button>
          </div> */}
        </div>
      </>
    );
  }
}
export default Rawquestion;
