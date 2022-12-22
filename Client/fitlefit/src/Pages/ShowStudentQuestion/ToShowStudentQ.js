import React, { useEffect, useState } from "react";
import "./ToShowStudent.css";
function ToShowStudentQ() {
  const [student, setStudent] = useState([]);
  let urlForStudent = "http://localhost:3456/user/getStudentData";

  useEffect(()=>{
    fetch(urlForStudent)
    .then((response)=>
       response.json()
    )
    .then((data)=>{
      setStudent(data)
    })
       
  },[])
  return (
    <div className="studentAkafiOne">
      <h3 className="TitleFromStaff">Question from students</h3>
      <div className="stuConten">
        <div>
          <h3 className="headerStyling">Forwarded From</h3>
        </div>
        <div>
          <h3 className="headerStyling"> Phase</h3>
        </div>
        <div>
          <h3 className="headerStyling">Title of the course</h3>
        </div>
        <div>
          <h3 className="headerStyling">Correction on</h3>
        </div>
        <div>
          <h3 className="headerStyling">Question</h3>
        </div>
        <div>
          <h3 className="headerStyling">Screenshot</h3>
        </div>
      </div>
      {student.map((data, j) => {
 
        let pictureConverter = btoa(String.fromCharCode(...new Uint8Array(data.screenshot2.data)))
       console.log(data.screenshot2.data)
        let studentDataDisplay = (
          <div key={j}>
            <div className="stuConten">
              <h6 className="listStyling">{data.forwarded_from}</h6>
              <h6 className="listStyling">{data.phase}</h6>
              <h6 className="listStyling">{data.title_of_the_course}</h6>
              <h6 className="listStyling">{data.correction_is_on}</h6>
              <h6 className="listStyling">{data.note_on_correction}</h6>
              <img src={`data:image/png;base64,${pictureConverter}`} alt=" there is pic here"/>
            </div>
            <br />
            <a href="/answer">Answer The Question</a>
           <br />
            <a href="">On Hold</a>
          <br />
            <a href="/viewAnswer">View answers</a>
          </div>
        );
        return studentDataDisplay;
      })}
      <a className="backToHome" href="/home">
        Back To Home Page
      </a>
    </div>
  );
}

export default ToShowStudentQ;
