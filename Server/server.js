import mysql from "mysql2";
import express from "express";
import createRoute from './Routes/create.js'
import cors from 'cors'
import queryFromEvangadiToPost from './Routes/queryRoute.js'
import queryFromStudentToPost from './Routes/SquestionsRoute.js'
import allDataRouteStudent from './Routes/getAllDataRouteFromStudent.js'
import allDataRouteStaff from './Routes/getAllDataRouteFromStaff.js'
import registerInfo from "./Routes/registerRoute.js"
import notificationRoute from "./Routes/notificationRoute.js";
import toShowNotification from "./Routes/getAllNotificationRoute.js"
import toDeleteNotification from "./Routes/notificationRoute.js"
let app = express();
// support middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: false }));
app.use(express.static("Public/ImageFromStaff/"))
app.use(express.static("Public/ImageFromStudent/"))
app.use(cors());
// main routes
app.use('/user',createRoute)
app.use('/user',queryFromEvangadiToPost)
app.use('/user',queryFromStudentToPost)
app.use('/user',allDataRouteStudent)
app.use('/user',allDataRouteStaff)
app.use('/user',notificationRoute)
app.use('/user',registerInfo)
app.use('/user',toShowNotification)
app.use('/user',toDeleteNotification)
// create connection info
let Econnection = mysql.createConnection({
    user:"evangadiSuggestion",
    password:"evangadisugesstion1234",
    host:"localhost",
    database:"evangadiSuggestion"
})
// create connection
Econnection.connect((err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log("connected")
    }
})

let port = 3456

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})


export default Econnection;