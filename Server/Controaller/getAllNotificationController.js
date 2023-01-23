import Econnection from "../server.js";

  let allDataFromNotificatonT = (req,res,next)=>{
    let allDatafromNotification= "SELECT * FROM notification"

    Econnection.query(allDatafromNotification,[],(err,dataFromNotification)=>{
          if(err){
                throw err
          }else{
                res.send(dataFromNotification);
          }
    })
}

export default allDataFromNotificatonT

