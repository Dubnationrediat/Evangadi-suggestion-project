import React, { useState } from "react";
import "./ForStaff.css";
import axios from 'axios';
// import nodem from 'nodemailer'
// import {sendEmail} from '../emailFunctionality/emailControler.js'
function fromStuff() {
let server = "http://localhost:3456"
let url = `${server}/user/postQuery`
const [formData, setFormData] = useState({
  forwarded_from :"",
  phase:"",
  title_of_the_course:"",
  correction_is_on :"",
  note_on_correction:"",
  screenshot1:""
});

let submitHandler = (e)=>{
  e.preventDefault();
  let fd = new FormData();
  fd.append('forwarded_from',formData.forwarded_from)
  fd.append('title_of_the_course',formData.title_of_the_course)
  fd.append('phase',formData.phase)
  fd.append('correction_is_on',formData.correction_is_on)
  fd.append('note_on_correction',formData.correction_is_on)
  fd.append('screenshot1',formData.screenshot1)

  axios({
    method: "post",
    url,
    data: fd,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })

}

let inputHandler = (e)=>{
  switch (e.target.name) {
    case "forwarded_from": setFormData((pre)=>{return {...pre,forwarded_from:e.target.value}})
      break;
    case "phase": setFormData((pre)=>{return {...pre,phase:e.target.value}})
      break;
    case "title_of_the_course": setFormData((pre)=>{return {...pre,title_of_the_course:e.target.value}})
      break;
    case "correction_is_on": setFormData((pre)=>{return {...pre,correction_is_on:e.target.value}})
      break;
    case "note_on_correction": setFormData((pre)=>{return {...pre,note_on_correction:e.target.value}})
      break;
    case "screenshot1": setFormData((pre)=>{return {...pre,screenshot1:  e.target.files[0]}})
      break;
    default:
      break;
  }
}


  return (
    <div className="staffAkafiMother container py-2 my-2 ">
      <div className="d-sm-row d-md-flex  staffAkafi">
      {/* action="http://localhost:3456/user/postQuery" method="POST" */}
        <form onSubmit={submitHandler} >
          <h3 className="heading py-5 ">
            For Comments To Be Forwarded From staffs For Content Correction
          </h3>
          <div className="d-sm-row d-md-flex my-2">
          <div>
            <div>
            <label className="titles" htmlFor="Name">Forwarded By </label>
            </div>
            <select className="name_section" name="forwarded_from" onChange={inputHandler}>
              <option value="Adugna">Adugna</option>
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
            <label className="titles" htmlFor="Name">Session </label>
            </div>
            <select className="name_section" name="phase" id="" onChange={inputHandler}>
              <option value="Technical assistant session">
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
            <label className="titles" htmlFor="Name">Course And Phase</label>
            </div>
            <select className="name_section" name="title_of_the_course" id="" onChange={inputHandler}>
              <option className="phaseOne" value="Basic computer skills">
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
              <option
                className="phaseThree"
                value="Basic Computer Skills Updated"
              >
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
            <select className="name_section" name="correction_is_on" id="" onChange={inputHandler}>
              <option value="Teaching Material">Teaching Material</option>
              <option value="Practice Questions">Practice Questions</option>
            </select>
          </div>
          </div>
         
          <div>
            <textarea
              type="text"
              name="note_on_correction"
              placeholder="your comment here"
              required
              onChange={inputHandler}
            />
          </div>
          <div className="labelAkafi">
          <label className="label" htmlFor="fileUpload">Upload Picture</label>
          <input
              onChange={inputHandler}
                id="fileUpload"
                name="screenshot1"
                type="file"
                accept="image/png"
              />
           

          </div>
          <div className="">
            <button className="btnStaff" type="submit">Submit</button>
          </div>
         <div>
         <a className="anchoreForHome " href="/home">Back To Home Page</a>
         </div>
          
        </form>
      </div>
    </div>
  );
}

export default fromStuff;
