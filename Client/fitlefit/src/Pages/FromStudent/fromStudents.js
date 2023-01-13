import React, { useState} from "react";
import "./FromStudents.css";
import axios from 'axios';
function FromStudents() {
  let server = "http://localhost:3456";
  let url = `${server}/user/postQueryFromStudents`;

  const [response, setResponce] = useState();

  const [formData, setFormData] = useState({
    sForwarded_from :"",
    sPhase:"",
    sTitle_of_the_course:"",
    sCorrection_is_on :"",    
    sNote_on_correction:"",
    screenshot2:""
  });

  let submitHandler = (e)=>{
    if(e.target.value == "null"){
      setFormData((pre)=>{return {
        ...pre,
        sForwarded_from :"Adugna",
        sPhase:"Technical assistant session",
        sTitle_of_the_course:"Basic computer skills",
        sCorrection_is_on :"Notes of Teaching Material"
             }}) 
    } else{
      e.preventDefault();
      let fd = new FormData();
      fd.append('sForwarded_from',formData.sForwarded_from)
      fd.append('sTitle_of_the_course',formData.sTitle_of_the_course)
      fd.append('sPhase',formData.sPhase)
      fd.append('sCorrection_is_on',formData.sCorrection_is_on)
      fd.append('sNote_on_correction',formData.sNote_on_correction)
      fd.append('screenshot2',formData.screenshot2)
    
      axios({
        method: "post",
        url,
        data: fd,
        headers: {"Content-Type": "multipart/form-data" },
      }).then((data)=>{
        console.log(data)
        setResponce(data.data)
      }).catch((err)=>{
        console.log(err)
      })
    } 
  }

  let inputHandler = (e)=>{
    e.preventDefault()
    switch (e.target.name) {
      case "sForwarded_from": setFormData((pre)=>{return {...pre,sForwarded_from:e.target.value}})
        break;
      case "sPhase": setFormData((pre)=>{return {...pre,sPhase:e.target.value}});
        break;
      case "sTitle_of_the_course": setFormData((pre)=>{return {...pre,sTitle_of_the_course:e.target.value}});
        break;
      case "sCorrection_is_on": setFormData((pre)=>{return {...pre,sCorrection_is_on:e.target.value}});
        break;
      case "sNote_on_correction": setFormData((pre)=>{return {...pre,sNote_on_correction:e.target.value}});
        break;
      case "screenshot2": setFormData((pre)=>{return {...pre,screenshot2:e.target.files[0]}});
        break;
        default:  
        break;
    }
  };
  if(response){
    return <div className="forSuccessPage">
                  <h1 className="thankYou">{response.forThankingStudent}</h1>
                  <a className="thankYouAnch" href="/home">{response.forHomePageReturnStudent}</a>
           </div>
  
  }else{
  
  return (
    <div className="container-fluid staffAkafiMother py-2 my-2 ">
      <div className="d-sm-row d-md-flex container staffAkafi">
        <form onSubmit={submitHandler} >
          <h3>For Questions To Be Forwarded By Staffs From Students</h3>
          <div className="d-sm-row d-md-flex my-2">
            <div>
              <div>
                <label className="titles" htmlFor="Name">
                  Forwarded By
                </label>
              </div>
              <select className="name_section"  name="sForwarded_from" required id="" onChange={inputHandler}>
                <option selected value="Adugna">Adugna</option>
                <option value="Aschalew">Aschalew</option>
                <option value="Biruk">Biruk</option>
                <option value="Daniel">Daniel</option>
                <option value="Edom">Edom</option>
                <option value="Eibrahim">Eibrahim</option>
                <option value="Israel">Israel</option>
                <option value="Rediat">Rediat</option>
                <option value="Saron">Saron</option>
                <option value="Seife">Seife</option>
                <option value="Tewedaj">Tewedaj</option>
              </select>
            </div>
            <div>
              <div>
                <label className="titles" htmlFor="Name">
                  Phase
                </label>
              </div>
              <select className="name_section" name="sPhase" id="" onChange={inputHandler}>
                <option selected value="Technical assistant session">
                  Technical assistant session
                </option>
                <option className="phaseOne" value="Phase One">
                  Phase One
                </option>
                <option className="phaseTwo" value="Phase two">
                  Phase two
                </option>
                <option className="phaseThree" value="Phase three">
                  Phase three
                </option>
              </select>
            </div>
            <div>
              <div>
              <label className="titles" htmlFor="Name">Course Title</label>
              </div>
            <select className="name_section" name="sTitle_of_the_course" id="" onChange={inputHandler}>
              <option selected className="phaseOne" value="Basic computer skills">
                Basic computer skills
              </option>
              <option className="phaseOne" value="Basics of HTML">
                Basics of HTML
              </option>
              <option className="phaseOne" value="CSS-Cascading style sheet">
                CSS-Cascading style sheet
              </option>
              <option className="phaseOne" value="Bootstrap">
                Bootstrap
              </option>
              <option className="phaseOne" value="Media Query">
                Media Query
              </option>
              <option className="phaseOne" value="Deployment">
                Deployment
              </option>
              <option className="phaseTwo" value="Introduction To JavaScript">
                Introduction To JavaScript
              </option>
              <option className="phaseTwo" value="">
                Functions and methods
              </option>
              <option
                className="phaseTwo"
                value="Conditional Statement And Decision Loops"
              >
                Conditional Statement And Decision Loops
              </option>
              <option className="phaseTwo" value="Javascript Objects">
                Javascript Objects
              </option>
              <option className="phaseTwo" value="jQuery">
                DOM manipulation
              </option>
              <option className="phaseTwo" value="jQuery">
                Javascript Events
              </option>
              <option className="phaseTwo" value="jQuery">
                jQuery
              </option>
              <option className="phaseThree" value="Bash Script And Git">
                Bash Script And Git
              </option>
              <option className="phaseThree" value="Introduction To Node">
                Introduction To Node
              </option>
              <option
                className="phaseThree"
                value="Introduction To Node Modules"
              >
                Introduction To Node Modules
              </option>
              <option className="phaseThree" value="Web Servers">
                Web Servers
              </option>
              <option className="phaseThree" value="Databases MySql">
                Databases MySql
              </option>
              <option className="phaseThree" value="Introduction To React">
                Introduction To React
              </option>
              <option
                className="phaseThree"
                value="React-Functional Components"
              >
                React-Functional Components
              </option>
              <option className="phaseThree" value="Asynchronous JavaScript">
                Asynchronous JavaScript
              </option>
              <option
                className="phaseThree"
                value="React-Class Based Components"
              >
                React-Class Based Components
              </option>
              <option className="phaseThree" value="React State">
                React State
              </option>
              <option className="phaseThree" value="React Hooks">
                React Hooks
              </option>
              <option value="Basic Computer Skills Updated">
                Basic Computer Skills Updated
              </option>
              <option value="Basics of HTML Updated">
                Basics of HTML Updated
              </option>
            </select>
            </div>
           <div>
            <div>
            <label className="titles" htmlFor="Name">Material Type </label>
            </div>
           <select className="name_section" name="sCorrection_is_on" id="" onChange={inputHandler}>
              <option selected value="Notes of Teaching Material ">Notes of Teaching Material </option>
              <option  value="video of Teaching Material">video of Teaching Material </option>
              <option value="Practice Questions">Practice Questions</option>
              <option value="Check list">Check list</option>
              <option value="To Do List">To Do List</option>
              <option value="Reference materials and Videos">Reference materials and Videos</option>
              <option value="Shared Document">Shared Document</option>
            </select>
           </div>
          </div>
          <div>
            <textarea
              type="text"
              name="sNote_on_correction"
              placeholder="students question here"
              onChange={inputHandler}
              required
            />
          </div>
          <div className="labelAkafi">
          <label className="label" htmlFor="fileUpload">
              Upload Picture
            </label>
            <h6>Picture Upload Is Mandatory</h6>
            <input
              onChange={inputHandler}
              id="fileUpload"
              name="screenshot2"
              type="file"
              multiple
              accept="image/png"
            />
          </div>
          <div>
            <button className="btnStaff" type="submit">
              Submit
            </button>
          </div>
          <div>
            <a className="anchoreForHome" href="/home">
              Back To Home Page
            </a>
          </div>
        </form>
      </div>
    </div>
  );
  }
}

export default FromStudents;
