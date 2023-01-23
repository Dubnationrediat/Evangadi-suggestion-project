import Econnection from "../server.js";

let postUserInfo =(req,res)=>{

const {user_first_name,user_last_name,user_email,user_password,user_name}= req.body

let value = [user_first_name,user_name,user_last_name,user_email,user_password]

let createUser =`INSERT INTO userinfo(user_first_name,user_name,user_last_name,user_email,user_password) VALUES (?)` 
Econnection.query(createUser,[value],(err)=>{
    if(err){
        res.send({
            errorMessage :"not registered"
        })
    }else{
        res.send({
            forThanking : `Uploaded successfully,Thank you!`,
            forHomePageReturn: `Click Here To Go Back To Home Page`
        })
    }
})
}

export default postUserInfo