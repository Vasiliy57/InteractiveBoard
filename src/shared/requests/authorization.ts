import axios from 'axios'
import { URL } from '@shared/constants'
import { UserDataInterface } from '@shared/types'

class AuthorizationApiClass {
  async authorizationUser(
    email: string,
    password: string
  ): Promise<UserDataInterface> {
    const user = {
      email,
      password,
    }

    const response = await axios({
      url: `${URL.HOST}/auth/authorization`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(user),
    }).then((res) => res.data)

    return response
  }

  async registrationUser(
    email: string,
    login: string,
    password: string
  ): Promise<UserDataInterface> {
    const user = {
      email: email,
      login: login,
      password: password,
    }

    const response = await axios({
      url: `${URL.HOST}/auth/registration`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(user),
    }).then((res) => res.data)

    return response
  }
}
const AuthorizationApi = new AuthorizationApiClass()

export { AuthorizationApi }
