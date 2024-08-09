import express from 'express'
import { verifyUser } from '../middleware/authenticateUser.js'
import { registerUser, loginUser } from '../controller/controller.js'
export const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/checkauth', verifyUser)