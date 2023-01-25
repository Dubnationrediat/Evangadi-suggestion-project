import Econnection  from "../server.js";

let notification =(req,res)=>{
    const {assigned_to,message}=req.body
    let value = [assigned_to,message];
    let notificationAdder = `INSERT INTO notification(assigned_to,message) VALUES (?)`;

    Econnection.query(notificationAdder,[value],(err)=>{
         if(err){
            console.log(err)
            res.send('uploading notifications was not successful')
         }else{
            res.send({
                forThanking : `Uploaded successfully,Thank you!`,
                forHomePageReturn: `Click Here To Go Back To Home Page`
            })
         }
    })
}

let deleteNotification = (req,res)=>{
      const  id = req.params.id
      let value = [id]

            let deleteNotification = `DELETE FROM notification Where notification_id = ${value}`;

            Econnection.query(deleteNotification,(err)=>{
                if(err){
                    console.log(err)
                    res.send('notification not deleted')
                }
            })
            res.send({
                forThanking : `Notification Deleted successfully,Thank you!`,
                forHomePageReturn: `Click Here To Go Back To Home Page`
            })
}

export {deleteNotification,notification}