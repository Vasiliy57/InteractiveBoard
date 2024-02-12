import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '@shared/constants'

import classes from './style.module.css'
import { authorizationUser } from '@shared/requests/authorization'

export const Authorization: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
    if (email.trim() && password.trim()) {
      authorizationUser(email.trim(), password.trim())
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
}
