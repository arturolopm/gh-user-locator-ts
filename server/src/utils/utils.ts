import User from '../models/user'
import { UserAttributes } from '../types/types'

export const createUserOnDB = async (
  userToCreate: UserAttributes
): Promise<UserAttributes | Error> => {
  try {
    const alreadyExist = await User.findOne({
      where: {
        login: userToCreate.login
      }
    })
    if (alreadyExist) {
      throw new Error(`User ${userToCreate.login} already exists`)
    }

    const user = await User.create({ ...userToCreate }).catch((error) => {
      return error
    })
    return user
  } catch (error) {
    throw error
  }
}
