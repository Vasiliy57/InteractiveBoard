import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTING } from '@shared/constants'
import { AuthorizationApi } from '@shared/requests'
import MyUserStore from '@shared/store/MyUserStore'

import classes from './style.module.css'

export const Authorization: React.FC = observer(() => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const { loggedIn } = MyUserStore

  const onHandEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 64) {
      setEmail(e.target.value)
    }
  }
  const onHandPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 16) {
      setPassword(e.target.value)
    }
  }

  const onHandlerAuth = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const currentEmail = email.trim()

    if (currentEmail && password) {
      AuthorizationApi.authorizationUser(currentEmail, password)
        .then((res) => {
          navigate('/')
          loggedIn(res.user.email, res.user.login, res.user.id, res.session)
        })
        .catch((error) => console.log('catch', error.response.data.message))
    }
  }

  return (
    <form className={classes.authorization}>
      <h3 className={classes.title}>Authorization</h3>
      <input
        type="email"
        className={classes.input}
        placeholder="Your account's email..."
        onChange={onHandEmail}
        value={email}
      />
      <input
        type="password"
        className={classes.input}
        placeholder="Your password..."
        onChange={onHandPassword}
        value={password}
      />
      <button type="submit" className={classes.signIn} onClick={onHandlerAuth}>
        Sign In
      </button>
      <p className={classes.text}>
        Don't you have an account yet? Then you can{' '}
        <Link className={classes.link} to={ROUTING.REGISTRATION}>
          Registration
        </Link>
      </p>
    </form>
  )
})
