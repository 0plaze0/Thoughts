import { Router } from "express";

const router = Router();

router.route("/").post((req, res) => {
  res.send("hello");
});

export { router };
