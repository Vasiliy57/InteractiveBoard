import axios from 'axios'
import { URL } from '@shared/constants'

export const authorizationUser = async (email: string, password: string) => {
  const user = {
    email,
    password,
  }

  const newUser = await axios({
    url: 'http://localhost:3001/auth/authorization',
    method: 'POST',
    data: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
