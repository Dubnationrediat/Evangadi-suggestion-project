import express from 'express'
import getAllNotifications from '../Controaller/getAllNotificationController.js'


let allDataNotificationRoute = express.Router();



allDataNotificationRoute.get('/allNotifications',getAllNotifications)

export default allDataNotificationRoute