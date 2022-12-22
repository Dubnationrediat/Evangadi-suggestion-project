import nodemailer from 'nodemailer';

export default function sendEmail  (){
 
let mailSender  = nodemailer.createTransport({
    service:"gmail",
    port:465,
    auth:{
        user:"red.terefe@gmail.com",
        pass :"kiuokihsnksqfukx"
    }
})

let details ={
    from :"red.terefe@gmail.com",
    to : "rediatandualeme@gmail.com",
    subject:"correction notice!",
    text:"new information regarding errors and improvement on documents  is uploaded "

};

mailSender.sendMail(details,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("email sent")
    }
})
}

