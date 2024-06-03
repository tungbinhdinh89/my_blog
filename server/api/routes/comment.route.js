import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment , getPostComments,likeComment} from "../controllers/comment.controller.js";

const route = express.Router();

route.post("/create", verifyToken, createComment);
route.get(`/get-post-comments/:postId`, getPostComments)
route.put(`/like-comment/:commentId`, verifyToken, likeComment)
export default route;
