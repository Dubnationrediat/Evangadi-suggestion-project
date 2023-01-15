import React from 'react'
import staffNames from '../../StaffNames/StaffNames.js'
import './Notification.css'
function Notificaiton() {
  return (
    <div className='notificationAkafi container'>
     <form action="">

  
     <h3 className='mt-3 d-flex'> Send Notification and Task Assignment</h3>
     <select  className="name_section" name="forwarded_from">
            <option  value="name not selected">please select name </option>
            <option className="phaseThree" value="Aduga">{staffNames.staff1}</option>
            <option className="phaseTwo" value="Aschalew">{staffNames.staff2}</option>
                <option className="phaseOne" value="Aschalew">{staffNames.staff3}</option>
                <option className="phaseFour" value="Biruk">{staffNames.staff4}</option>
                <option className="phaseOne" value="Daniel">{staffNames.staff5}</option>
                <option className="phaseTwo" value="Edom">{staffNames.staff6}</option>
                <option className="phaseThree" value="Eibrahim">{staffNames.staff7}</option>
                <option className="phaseFour" value="Israel">{staffNames.staff8}</option>
                <option className="phaseThree" value="Israel">{staffNames.staff9}</option>
                <option className="phaseOne" value="Rediat">{staffNames.staff10}</option>
                <option className="phaseTwo" value="Rediat">{staffNames.staff11}</option>
                <option className="phaseTwo" value="Saron">{staffNames.staff12}</option>
                <option className="phaseThree" value="Seife">{staffNames.staff13}</option>
                <option className="phaseFour" value="Tewedaj">{staffNames.staff14}</option>
                <option value="For All">For All</option>
           </select>
           <textarea type="text"  placeholder='Your  Message on Task here' id='task' />
           <button className='notificationSubmit'>send</button>
           </form>
    </div>
  )
}

export default Notificaiton