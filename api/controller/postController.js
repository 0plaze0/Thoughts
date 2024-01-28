import fs from "fs";
import { getExtension } from "../utils/getExtension.js";

const createPost = async (req, res) => {
  console.log(req.file);
  console.log(req.body.title);
  const { originalname, path } = req.file;
  const ext = getExtension(originalname);
  fs.renameSync(path, path + "." + ext);
  res.json("ok");
  console.log(ext);
};

export default { createPost };
