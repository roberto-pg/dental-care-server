type UserModel = {
  name: string
  email: string
  cpf: string
  password?: string
  card: string
  plan: string
  active: boolean
  admin: boolean
}

export interface IListUsersRepository {
  execute(): Promise<UserModel[]>
}
