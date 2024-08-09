import { pool } from "../config/database.js";
import { hashPassword } from "../utils/general.js";
import bcrypt from 'bcryptjs'
export const saveUser = async (email, password) => {
    const connection = await pool.getConnection();
    try {
        const getUserQuery = `SELECT * FROM users WHERE email = ? LIMIT 1`;
        const getUserValue = [email];
        const [rows] = await connection.execute(getUserQuery, getUserValue);
        if (rows.length > 0) {
            throw new Error('Unable to register the user, the email already exists');
        }
        const hashedPassword = await hashPassword(password)
        const insertUserQuery = `INSERT INTO users(email, password) VALUES(?, ?)`
        const insertUserValues = [email, hashedPassword]
        await connection.execute(insertUserQuery, insertUserValues)
        return;
    } catch (error) {
        throw new Error(error.message)
    } finally {
        connection.release();
    }
}
export const getUser = async (email, password) => {
    const connection = await pool.getConnection();
    try {
        const getUserQuery = `SELECT * FROM users WHERE email = ? LIMIT 1`;
        const getUserValue = [email];
        const [rows] = await connection.execute(getUserQuery, getUserValue);
        if (rows.length === 0) {
            throw new Error('Invalid email or password');
        }
        const passwordMatch = await bcrypt.compare(password, rows[0].password);
        if (!passwordMatch) {
            throw new Error('Invalid email or password!')
        }
        return;
    } catch (error) {
        throw new Error(error.message)
    } finally {
        connection.release();
    }
}