import User from "./../model/userSchema.js";
import bcrypt from "bcrypt";

const authUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });
  try {
    const result = await User.findOne({ username: username }).exec();
    if (!result) return res.sendStatus(401);
    //compare password
    const match = await bcrypt.compare(password, result.password);

    if (match) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(401);
    }
  } catch (err) {
    console.log(err.message);
  }
  res.send(username);
};
export default { authUser };
