import React from "react";
import "./FromStudents.css";
function FromStudents() {
  return (
    <div className="container-fluid staffAkafiMother py-2 my-2 ">
      <div className="d-sm-row d-md-flex container staffAkafi">
        <form
          action="http://localhost:3456/user/postQueryFromStudents"
          method="POST"
        >
          <h3>For Questions To Be Forwarded By Staffs From Students</h3>
          <div className="d-sm-row d-md-flex my-2">
            <div>
              <div>
                <label className="titles" htmlFor="Name">
                  Forwarded By
                </label>
              </div>
              <select className="name_section" name="sForwarded_from" id="">
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
                <label className="titles" htmlFor="Name">
                  Session
                </label>
              </div>
              <select className="name_section" name="sPhase" id="">
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
            <select className="name_section" name="sTitle_of_the_course" id="">
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
           <select className="name_section" name="sCorrection_is_on" id="">
              <option value="Teaching Material">Teaching Material</option>
              <option value="Practice Questions">Practice Questions</option>
            </select>
           </div>
           
          </div>
          <div>
            <textarea
              type="text"
              name="sNote_on_correction"
              placeholder="students question here"
              required
            />
          </div>
          <div className="labelAkafi">
            <input
              id="fileUpload"
              name="screenshot2"
              type="file"
              multiple
              accept="image/png"
            />
            <label className="label" htmlFor="fileUpload">
              Upload Picture
            </label>
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

export default FromStudents;
