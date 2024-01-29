import fs from "fs";
import jwt from "jsonwebtoken";

import Post from "./../model/postSchema.js";
import { getExtension } from "../utils/getExtension.js";

const createPost = async (req, res) => {
  const { title, summary, content } = req.body;
  const { originalname, path } = req.file;

  const ext = getExtension(originalname);
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const tokenData = await jwt.verify(
    req.cookies["access-token"],
    process.env.ACCESS_TOKEN_SECRET
  );

  try {
    const result = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: tokenData.id,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.response.status).json(err.message);
  }
};
const getPost = async (req, res) => {
  try {
    const result = await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20);
    if (!result) return res.status(200).json("no data found");
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
const getArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Post.findById(id).populate("author", ["username"]);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default { createPost, getPost, getArticle };
