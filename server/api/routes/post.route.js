import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  getPosts,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";

const route = express.Router();

route.post("/create", verifyToken, create);
route.get("/get-posts", getPosts);
route.delete("/delete-post/:postId/:userId", verifyToken, deletePost);
route.put("/update-post/:postId/:userId", verifyToken, updatePost);

export default route;
