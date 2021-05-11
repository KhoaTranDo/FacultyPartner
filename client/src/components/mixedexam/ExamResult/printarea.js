import { Component } from "react";
import { asBlob } from "html-docx-js-typescript";
import { saveAs } from "file-saver";
import Exportdocx from'../Printdocx/Exportdocx'
class Areaprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: "element",
      data: {},
    };
  }

  componentDidMount() {
    let { dataquestion, dataraw } = this.props.location.state;
    this.setState({
      data: dataquestion,
      qrcoded: dataraw["image"],
    });
  }

  Renderquestion = () => {
    console.log(this.state.data);
    let rawdata = this.state.data;
    console.log(this.state.image);
    return (
      <>
        {console.log(this.state.qrcoded)}
        <div className='row'>
        <img id='qrcode' src={this.state.qrcoded} alt="" width="50" height="50" />
        </div>
        <div className='row'>
        <h1 id='idex' style={{ margin: "auto"}} className='text-center'>
          <b>Đề {rawdata.idexam}</b>
        </h1>
        </div>
        {this.Renderanswer()}
      </>
    );
  };
  Renderanswer = () => {
    let answer = ["A", "B", "C", "D", "E", "F"];
    let rawdata = this.state.data.questions;
    if (rawdata) {
      return rawdata.map((value, index) => {
        return (
          <>
            <p style={{ fontSize: "14pt" }}>
              <b>{index + 1}</b>.{value["Question"]}
            </p>
            {value["Answer"].map((value, index) => {
              return (
                <p style={{ fontSize: "14pt"}}>
                  {answer[index]}. {value}
                </p>
              );
            })}
          </>
        );
      });
    }
  };
  exportdocx = (filename = "") => {
  
    console.log(this.state.element);
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office \
      'xmlns:w='urn:schemas-microsoft-com:office:word' \
      xmlns='http://www.w3.org/TR/REC-html40'> \
      <head><meta charset='utf-8'> \
      <title>Export HTML To Doc</title>\
      <style>*{ padding:0; margin:0; } img#qrcode{ width: 50px; } #idex{ text-align:center; } p{ font-size:14pt; font-family: 'Times New Roman', Times, serif; }</style>\
      </head>\
      <body>";
    var postHtml = "</body></html>";
    var html =
      preHtml +
      document.getElementById(this.state.element).innerHTML +
      postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });
    asBlob(html).then((data) => {
      saveAs(data, "file.docx"); // save as docx file
    });
    // // Specify link url
    // var url =
    //   "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // // Specify file name
    // filename = filename ? filename + ".doc" : "document.doc";

    // // Create download link element
    // var downloadLink = document.createElement("a");

    // document.body.appendChild(downloadLink);

    // if (navigator.msSaveOrOpenBlob) {
    //   navigator.msSaveOrOpenBlob(blob, filename);
    // } else {
    //   // Create a link to the file
    //   downloadLink.href = url;

    //   // Setting the file name
    //   downloadLink.download = filename;

    //   //triggering the function
    //   downloadLink.click();
    // }

    // document.body.removeChild(downloadLink);
  };

  render() {
    return (
      <div className='container' style={{backgroundColor:'#99FCEA'}}> 
            <button onClick={this.exportdocx}>Xuat docx</button>
        <div class="m-auto, d-block" >
          <div id={this.state.element} style={{width:'816px',backgroundColor:'white',padding:' 20px 95px'}} className="m-auto">
            
            {this.Renderquestion()}
          
            {/* <Prompt when={true}
                    message={(location)=>'Ban co chac khong'}>
                    </Prompt> */}
            {/* <Printare /> */}
          </div>
        </div>
        <Exportdocx/>
      </div>
    );
  }
}
export default Areaprint;
