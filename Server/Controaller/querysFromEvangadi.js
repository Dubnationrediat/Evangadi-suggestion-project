import Econnection  from "../server.js";

let postInfo = (req,res)=>{
    if(req.file){
        let imagePath = req.file.filename
        // const {forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction} = req.body
        console.log(req.body)
        // let values = [imagePath,forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction]
        // let contentAdder = `INSERT INTO forquery(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,screenshot1) VALUES (?)`;

        // Econnection.query(contentAdder,[values],(err)=>{
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("1 record inserted")
        //     }
        //     res.end("<h2>Uploaded successfully,Thank you!</h2>")
        // })
    
    }
    res.end("<h2>uploading the information was not successful, please follow the instruction. Thank You!</h2>")
 


}

export default postInfo;




