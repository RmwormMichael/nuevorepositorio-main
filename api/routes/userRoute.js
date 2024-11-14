import express from 'express';
const router = express.Router();

import { getAllUsers,getUser } from '../controller/userController.js';

router.get('/', getAllUsers); 
router.get('/user:id', getUser);
export default router;
