import express from 'express';


import {notification} from '../Controaller/noticationControler.js';
import {deleteNotification} from '../Controaller/noticationControler.js'

let notificationRoute = express.Router();

notificationRoute.post('/notification',notification)
notificationRoute.delete(`/deleteNotification/:id`,deleteNotification)

export default notificationRoute