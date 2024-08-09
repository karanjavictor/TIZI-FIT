import { saveUser, getUser } from "../data/data.js";
import { isRegistrationValid, isValidLogin } from "../utils/general.js";
import { generateJWT } from "../middleware/authenticateUser.js";
export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        await isRegistrationValid(email, password);
        await saveUser(email, password);
        res.status(200).json({message: 'User successfully registered'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        await isValidLogin(email, password);
        await getUser(email, password);
        const accessToken = await generateJWT(email);
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict'
        });
        res.status(200).json({message: 'Logged in successfully', email});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}