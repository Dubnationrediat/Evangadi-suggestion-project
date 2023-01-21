import React, { useState } from 'react'
import axios from 'axios'
import staffNames from '../../StaffNames/StaffNames.js'
import './Notification.css'
let ser ="http://localhost:3456";
let address = `${ser}/user/notification`
function Notificaiton() {
  const [Data,setFormData] = useState({
    assigned_to:"",
     message:""
   });

   const [response,setResponse] =useState();

  let  forSubmit = async (e)=>{
    e.preventDefault()
    const fileUploader= new FormData();
    fileUploader.append('assigned_to',Data.assigned_to);
    fileUploader.append('message',Data.message);
try{
   await axios({
      url:address,
      headers: {"Content-Type": "multipart/form-data"},
      method: "post",
      data: fileUploader,
    }).then((data)=>{
      setResponse(data.data)
    }).catch((err)=>{
      console.log(err)
    })

  }catch(err){
    console.log(err)
  }

  }
  

  let forInput =(e)=>{
    switch (e.target.name){
    case 'assigned_to' : setFormData((pre)=>{return{...pre,assigned_to:e.target.value}})
    break;
    case 'message' : setFormData((pre)=>{return{...pre,message:e.target.value}})
    break
    default:
      break
    }
  };
    if(response){
      return <div className='forSuccessPage'>
                <h1 className='thankYou'>{response.forThanking}</h1>
                <a className='thankYouAnch' href="">{response.forHomePageReturn}</a>
          </div>
    }else{
      return (
        <div className='notificationAkafi container'>
         <form onSubmit={forSubmit} method="post">
        <h3 className='mt-3 d-flex'> Send Notification and Task Assignment</h3>
              <select  className="name_section" name="assigned_to" onChange={forInput}>
                    <option value="name not selected">please select name </option>
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
              <textarea type="text" name='message'  placeholder='Your  Message on Task here' id='task' onChange={forInput} />
              <button  className='notificationSubmit'>send</button>
              </form>  
              
        </div>
      )
    }
}

export default Notificaiton