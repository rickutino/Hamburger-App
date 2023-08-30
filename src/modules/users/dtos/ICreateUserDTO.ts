interface ICreateUserDTO {
  id?: string
  name: string
  email: string
  password: string
  avatar?: string
  is_admin: boolean
  staff?: 'kicthen' | 'waitress' | undefined
}
