import { URL } from '@shared/constants'

export const registrationUser = async (
  email: string,
  login: string,
  password: string
) => {
  try {
    const user = {
      email: email,
      login: login,
      password: password,
    }

    const newUser = await fetch(URL.REGISTRATION, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    console.log(newUser)
  } catch (error) {
    console.log('ERROR', error.message)
  }
}
