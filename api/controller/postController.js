import Post from "./../model/postSchema.js";
import fs from "fs";

import { getExtension } from "../utils/getExtension.js";

const createPost = async (req, res) => {
  const { title, summary, content } = req.body;
  const { originalname, path } = req.file;

  const ext = getExtension(originalname);
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  try {
    const result = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.response.status).json(err.message);
  }
};

export default { createPost };
