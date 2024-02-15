import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useNavigate } from 'react-router-dom'

import { ROUTING } from '@shared/constants'
import { AuthorizationApi } from '@shared/requests'
import MyUserStore from '@shared/store/MyUserStore'

import classes from './style.module.css'

export const Registration: React.FC = observer(() => {
  const [login, setLogin] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const navigate = useNavigate()
  const { loggedIn } = MyUserStore

  const onHandlerLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 14) {
      setLogin(e.target.value)
    }
  }
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

  const onHandRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 16) {
      setRepeatPassword(e.target.value)
    }
  }

  const onHandlerRegistration = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const currentEmail = email.trim()
    const currentLogin = login.trim()

    if (
      password &&
      password === repeatPassword &&
      currentEmail &&
      currentLogin
    ) {
      AuthorizationApi.registrationUser(currentEmail, currentLogin, password)
        .then((res) => {
          navigate('/')
          loggedIn(res.user.email, res.user.login, res.user.id, res.session)
        })
        .catch((error) => console.log('catch', error.message))
    }
  }
  return (
    <form className={classes.registration}>
      <h3 className={classes.title}>Registration</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="Your account's login..."
        onChange={onHandlerLogin}
        value={login}
      />
      <input
        type="email"
        className={classes.input}
        placeholder="Your email..."
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
      <input
        type="password"
        className={classes.input}
        placeholder="Repeat your password..."
        onChange={onHandRepeatPassword}
        value={repeatPassword}
      />
      <button
        type="submit"
        className={classes.signIn}
        onClick={onHandlerRegistration}
      >
        Registration
      </button>
      <p className={classes.text}>
        Do you already have an account? Then you can <span> </span>
        <Link className={classes.link} to={ROUTING.AUTHORIZATION}>
          LogIn
        </Link>
      </p>
    </form>
  )
})
