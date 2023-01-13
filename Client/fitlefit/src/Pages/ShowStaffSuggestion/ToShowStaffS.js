import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ToShowStaff.css";
function ToShowStaffS() {

  const [staff, setStaff] = useState([]);

  const [forImage, setforImage] = useState([]);

  let urlForStaff = "http://localhost:3456/user/getStaffData";
  
  const dataFromStaffes = async () => {
    try {
      const responceForStaff = await axios.get(urlForStaff);

      let convertedForStaff = JSON.parse(JSON.stringify(responceForStaff.data));

      setStaff(convertedForStaff);
    } catch (err) {
      console.log({ "its error": err });
    }
  };
  useEffect(() => {
    dataFromStaffes();
  }, []);

  return (
    <div className="toShowStaffForward">
      <h1 className="TitleFromStaff">Forwarded From Staffs on Courses</h1>
      <div className="stafContain">
        <div>
          <h4 className="headerStyling">Forwarded From</h4>
        </div>
        <div>
          <h4 className="headerStyling"> Phase</h4>
        </div>
        <div>
          <h4 className="headerStyling">Title of the course</h4>
        </div>
        <div>
          <h4 className="headerStyling">Correction on</h4>
        </div>
        <div>
          <h4 className="headerStyling">Passed note on correction</h4>
        </div>
        <div>
          <h4 className="headerStyling">Screenshot</h4>
        </div>
  
      </div>
      {staff.map((data, i) => {
        let staffDataDisplay = (
          <div key={i}>
            <div className="stafContain">
              <h3 className="listStyling">{data.forwarded_from}</h3>
              <h3 className="listStyling">{data.phase}</h3>
              <h3 className="listStyling">{data.title_of_the_course}</h3>
              <h3 className="listStyling">{data.correction_is_on}</h3>
              <h3 className="listStyling">{data.note_on_correction}</h3>
              <img src={data.screenshot1} />
            </div>
            <button className="btnForCorrection" type="submit">
              Corrected
            </button>
            <button className="btnForHold" type="submit">
              On Hold
            </button>
          </div>
        );
        return staffDataDisplay;
      })}
      <a className="backToHome" href="/home">Back To Home Page</a>
    </div>
  );
}

export default ToShowStaffS;
