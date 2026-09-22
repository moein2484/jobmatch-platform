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
export { hashPassword, generateToken };
