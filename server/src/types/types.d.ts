interface UserAttributes {
  id: number
  userName: string
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export { UserAttributes }
