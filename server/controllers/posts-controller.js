import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    //console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  if (post.creator) {
    const newPost = new PostMessage(post);

    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    res.status(404).send("creator and selected file cant be left blank");
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  console.log("body => ", post);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  console.log("delete route");
  const { id } = req.params;
  console.log(id);

  try {
    const deletedPost = await PostMessage.findByIdAndRemove(id);
    //console.log(deletedPost);
    res.status(201).send(`record with id ${id} has been deleted successfully`);
  } catch (error) {
    res.status(404).send("unable to delete the record");
  }
};
