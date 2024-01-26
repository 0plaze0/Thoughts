import { Router } from "express";
import registerController from "../controller/registerController.js";
const router = Router();

router.route("/").get(registerController.createUser);

export { router };
