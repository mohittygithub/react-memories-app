import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getMemories = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    //console.log(postMessages);
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createMemory = async (req, res) => {
  const post = req.body
  if (post.creator) {
    const newPost = new PostMessage(post)

    try {
      await newPost.save()
      res.status(201).json(newPost)
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  } else {
    res.status(404).send('creator and selected file cant be left blank')
  }
}

export const updateMemory = async (req, res) => {
  const { id } = req.params
  const post = req.body
  const _id = id
  // console.log("body => ", post);

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`)

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  )
  res.json(updatedPost)
}

export const deleteMemory = async (req, res) => {
  // console.log("delete route");
  const { id } = req.params
  // console.log(id);

  try {
    const deletedMemory = await PostMessage.findByIdAndRemove(id)

    const deletedMem = {
      message: `deleted the memory with id ${deletedMemory._id}`,
      id: deletedMemory._id,
    }
    // res.status(201).send(`record with id ${id} has been deleted successfully`);
    res.status(201).json(deletedMem)
  } catch (error) {
    res.status(404).send('unable to delete the record')
  }
}
