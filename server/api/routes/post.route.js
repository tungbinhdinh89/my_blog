import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controllers/post.controller.js";

const route = express.Router();

route.post("/create", verifyToken, create);

export default route;
