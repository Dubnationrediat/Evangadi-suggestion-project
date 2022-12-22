import Econnection from '../server.js';
import tableFromEvangadi from '../Schema/db.js'
import tableFromStudents from '../Schema/db2.js'


let tableCreator = (req,res)=>{
    Econnection.query(tableFromEvangadi,(err)=>{
        if(err){
            console.log(err)
        }
    })
    Econnection.query(tableFromStudents,(err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send("two tables created")
}

export default tableCreator;