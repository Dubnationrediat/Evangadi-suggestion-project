import Econnection  from "../server.js";

let postInfo = (req,res)=>{
    if(req.file){
        let imagePath2= req.file.filename
        const {sNote_on_correction,sCorrection_is_on,sTitle_of_the_course,sPhase,sForwarded_from} = req.body
        let adderToStudentTable = `INSERT INTO studentinfo(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,screenshot2) VALUES (?,?,?,?,?,?)`;
        let value = [imagePath2,sNote_on_correction,sCorrection_is_on,sTitle_of_the_course,sPhase,sForwarded_from]
        Econnection.query(adderToStudentTable,[value],(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("1 record inserted")
            }
    
            res.end("<h2>Uploaded successfully,Thank you!</h2>")
        })
    
    }
    res.end("<h2>uploading the information was not successful, please follow the instruction. Thank You!</h2>")
 



}

export default postInfo;




