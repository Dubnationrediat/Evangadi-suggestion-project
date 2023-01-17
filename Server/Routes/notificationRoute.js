import express from 'express';


import notification from '../Controaller/noticationControler.js';

let notificationRoute = express.Router();

notificationRoute.post('/notification',notification)

export default notificationRoute