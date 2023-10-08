import { Request, Response } from 'express'
import User from '../models/user'
import { createUserOnDB } from '../utils/utils'

export const getAllUsers = async (req: Request, res: Response) => {
  const responseItem = await User.findAll()
  res.json(responseItem)
}

export const getOneUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const responseItem = await User.findByPk(id)
  if (responseItem) {
    res.json(responseItem)
  } else {
    res.status(404).json({
      message: 'User not found'
    })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { body } = req
  try {
    const responseItem = await createUserOnDB(body)
    res.status(200).send(responseItem)
  } catch (error: any) {
    // Check if the error is due to a pre-existing user
    if (error.message.includes('already exists')) {
      res.status(409).send({ error: error.message })
    } else {
      res
        .status(500)
        .send({ error: 'An error occurred while creating the user.' })
    }
  }
}
export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    msg: 'deleteUser pending route',
    id
  })
}
export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req

  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    } else {
      await user.update(body)
      res.status(200).json({
        message: 'User updated',
        user
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error updating user'
    })
  }
}
