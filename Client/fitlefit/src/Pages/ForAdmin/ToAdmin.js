import React from 'react';
import './ForAdmin.css';
function ToAdmin() {
  return (
        
    <div className="display_body ">
    <div className="my-3 d-md-flex d-sm-none justify-content-between container showAkafii">
      <div className="showss">
        <a href="/showStaffSuggestion">Show staff suggestions</a>
      </div>
      <div className="showss">
        <a href="/showStudentQuestions">Show student questions</a>
      </div>
      <div className="showss">
        <a className='' href="/home">Back To Home Page</a>
      </div>
    </div>
    </div>

  );
}

export default ToAdmin;
