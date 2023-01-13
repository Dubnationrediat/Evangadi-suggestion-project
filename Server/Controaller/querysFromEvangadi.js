import Econnection  from "../server.js";
import nodemailer from 'nodemailer'
let postInfo = (req,res)=>{

    if(req.file){
        let imagePath = req.file.filename;
        
        const {forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction} = req.body;
        
        let values = [forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,imagePath];
        
        let contentAdder = `INSERT INTO forquery(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,screenshot1) VALUES (?)`;
        
        Econnection.query(contentAdder,[values],(err)=>{

            if(err){
                console.log(err)
                res.send("uploading the information was not successful, please follow the instruction. Thank You!")
            }else{
                function sendEmail  (){
  
                    let mailSender  = nodemailer.createTransport({
                        service:"gmail",
                        port:465,
                        auth:{
                            user:"red.terefe@gmail.com",
                            pass :"kiuokihsnksqfukx"
                        }
                    });
                    
                    let details ={
                        from :"red.terefe@gmail.com",
                        to : "rediatandualeme@gmail.com",
                        subject:"correction notice!",
                        text:"new information regarding errors and improvement on documents  is uploaded BY EVANGADI STAFF REGARDING TEACHING MATERIAL please visit the site www.google.com "
                    };
                    
                    mailSender.sendMail(details,(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("email sent")
                        }
                    })
                    }
                    
                    sendEmail()
                // res.send(`Uploaded successfully,Thank you!\n <a href="/home">Back To Home Page</a>`)
                res.send({
                    forThanking : `Uploaded successfully,Thank you!`,
                    forHomePageReturn: `Click Here To Go Back To Home Page`
                })
                console.log("1 record inserted")
            };
            
        })
    }
}

export default postInfo;




