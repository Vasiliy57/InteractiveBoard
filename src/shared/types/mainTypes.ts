export interface boardInterface {
  title: string
  color: string
  id: string
}
export interface UserDataInterface {
  user: {
    login: string
    email: string
    id: string
  }
  session: {
    accessToken: string
    refreshToken: string
  }
}
