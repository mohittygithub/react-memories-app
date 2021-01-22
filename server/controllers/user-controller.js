import mongoose from 'mongoose'
import User from '../models/users.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    const usersObject = {
      message: 'success',
      totalRecords: users.length,
      users: users,
    }

    res.status(200).send(usersObject)
  } catch (error) {
    res.send(404).json({ message: error.message })
  }
}

export const getUserById = async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findById(_id)
    res.status(200).send(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  const user = req.body
  const newUser = new User(user)

  try {
    const isPresent = await User.findOne({ email: user.email })
    if (isPresent) {
      res.status(400).json({ message: `email ${user.email} already exists` })
    } else {
      await newUser.save()
      res.status(201).send(newUser)
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id
  const _id = id
  const user = req.body
  // console.log(_id, user)
  // res.send('hit')
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { ...user, _id },
      { new: true }
    )
    res.status(201).send(updateUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteUserById = async (req, res) => {
  const id = req.params.id

  try {
    await User.findByIdAndRemove(id)
    res.status(201).json({ id: id, message: 'record deleted' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
