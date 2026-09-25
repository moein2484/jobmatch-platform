import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
const hashPassword = async (pass) => {
  const passHash = await hash(pass, 12);
  return passHash;
};
const generateToken = async (data) => {
  const token = sign({ ...data }, process?.env?.privatekey, {
    // algorithm: "HS256",
    expiresIn: "24h",
  });
  return token;
};
const verifyToken = async (token) => {
  try {
    const isValid = verify(token, process.env.privatekey);
    return isValid;
  } catch (err) {
    return false;
  }
};
const verifyPassword = async (pass, hashedPass) => {
  const isValid = await compare(pass, hashedPass);
  return isValid;
};
export { hashPassword, generateToken, verifyToken , verifyPassword };
