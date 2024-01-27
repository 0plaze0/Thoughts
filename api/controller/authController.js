import User from "./../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const authUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });
  try {
    const result = await User.findOne({ username: username }).exec();
    if (!result) return res.sendStatus(401);

    const match = await bcrypt.compare(password, result.password);

    if (match) {
      const accessToken = await jwt.sign(
        { username, id: result._id },
        process.env.ACCESS_TOKEN
      );

      return res.status(200).cookie("access-token", accessToken).json("ok");
    } else return res.sendStatus(401);
  } catch (err) {
    console.log("hello");
    console.log(err.message);
  }
  res.send(username);
};
export default { authUser };
