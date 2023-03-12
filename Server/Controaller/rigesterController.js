import Econnection from "../server.js";
import bcrypt from 'bcrypt';

let postUserInfo =(req,res)=>{

const {user_first_name,user_last_name,user_email,user_password,user_name} = req.body

// * information validation seciton 

 let verifiedInfo = {
    verified_email:user_email,
    verified_password:user_password,
    verified_first_name:user_first_name,
    verified_last_name:user_last_name,
 }

//  * user input triming
let trimed_frist_name = user_first_name.trim().replace(/\s/g,"");
let trimed_last_name = user_last_name.trim().replace(/\s/g,"");
let trimmedEmail = user_email.trim().replace(/\s/g,"")
let trimmedUserPassword = user_password.trim().replace(/\s/g,"");

// * validators
let nameValidator = /^[A-Za-z\\s]+$/
let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
let emailValidator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

if(!nameValidator.test(trimed_frist_name) || !nameValidator.test(trimed_last_name)){
     return res.send({
        errorMessage: `Name should only contain Alphabets`
    })
}else{
    verifiedInfo = {...verifiedInfo,verified_first_name : trimed_frist_name,verified_last_name:trimed_last_name
    }
// * email validation
 if(!emailValidator.test(trimmedEmail)){
    return res.send({
      errorMessage: `invalid email `
  })
}else{
   verifiedInfo ={
       ...verifiedInfo,
       verified_email:trimmedEmail
    }
 //* password validator
if(!passwordValidator.test(trimmedUserPassword)){
  return  res.send({
      errorMessage: `password should contain at list  8 digits, one Upper case, One Lower case, and one Special character `
  })
}else{
//    let encryptedPassword =  async ()=>{
//         let salt = await bcrypt.genSalt();
//         let hash_password = await bcrypt.hash(trimmedUserPassword,salt);
//         console.log(hash_password)
        verifiedInfo ={
            ...verifiedInfo,
            verified_password : trimmedUserPassword
         }
//   }
//   encryptedPassword()
}
}
}
// Rediat@1234
    console.log(verifiedInfo)

let createUser =`INSERT INTO userinfo(user_first_name,user_name,user_last_name,user_email,user_password,user_role) VALUES (?)`
let value = [verifiedInfo.verified_first_name,user_name,verifiedInfo.verified_last_name,verifiedInfo.verified_email,verifiedInfo.verified_password,0] 
Econnection.query(createUser,[value],(err)=>{
    if(err){
     return   res.send({
            errorMessage :"not registered"
        })
    }else{
      return  res.send({
            forThanking : `Registered successfully,Thank you!`,
            forHomePageReturn: `Click Here To Go Back To Home Page`
        })
       
    }
})
}

export default postUserInfo