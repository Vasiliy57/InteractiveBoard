import { URL } from '@shared/constants'

export const authorizationUser = async (email: string, password: string) => {
  try {
    const user = {
      email: email,
      password: password,
    }
    console.log(user)

    const newUser = await fetch(URL.AUTHORIZATION, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(user),
    })

    console.log(newUser.body)
  } catch (error) {
    console.log('ERROR', error.message)
  }
}
