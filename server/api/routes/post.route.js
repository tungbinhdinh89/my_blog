import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, getPosts } from "../controllers/post.controller.js";

const route = express.Router();

route.post("/create", verifyToken, create);
route.get("/get-posts", getPosts);

export default route;
