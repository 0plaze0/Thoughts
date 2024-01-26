import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  return res.send("message");
});

export { router };
