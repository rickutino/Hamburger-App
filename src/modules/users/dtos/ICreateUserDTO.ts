interface ICreateUserDTO {
  id?: string
  name: string
  email: string
  password: string
  avatar?: string
  isAdmin: boolean
  staff?: 'kicthen' | 'waitress' | undefined
}

export { ICreateUserDTO }
