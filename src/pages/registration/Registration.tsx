import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '@shared/constants'

import classes from './style.module.css'
import { registrationUser } from '@shared/requests'

export const Registration: React.FC = () => {
  const [login, setLogin] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

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
    if (password === repeatPassword) {
      registrationUser(email.trim(), login.trim(), password.trim())
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
}
