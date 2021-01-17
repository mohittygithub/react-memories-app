import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts-controller.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
