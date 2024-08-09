import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();
const secretKey = process.env.SECRET_KEY;

export const generateJWT = async (email) => {
  const accessToken = jwt.sign({ email: email }, secretKey, {
    expiresIn: "1h",
  });
  return accessToken;
};
export const verifyUser = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(400).json({error: "Please log in"});
  }

  jwt.verify(accessToken, secretKey, (error) => {
    if (error) {
      return error.name === "TokenExpiredError" ? res.status(400).json({error: "Session expired, please log in again"}) : res.status(400).json({error: "Invalid token, please log in"});
    }
    next();
  });
};
export const checkAuth = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(400).json({authenticated: "false"});
  }

  jwt.verify(accessToken, secretKey, (error) => {
    if (error) {
      return res.status(400).json({authenticated: "false"});
    }
    return res.status(400).json({authenticated: "true"});
  });
};

