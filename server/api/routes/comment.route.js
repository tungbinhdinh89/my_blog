import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controllers/comment.controller.js";

const route = express.Router();

route.post("/create", verifyToken, createComment);

export default route;
