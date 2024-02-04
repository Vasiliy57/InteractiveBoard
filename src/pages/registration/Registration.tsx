import { Link } from 'react-router-dom'
import { ROUTING } from '@shared/constants'

import classes from './style.module.css'

export const Registration: React.FC = () => {
  return (
    <form className={classes.registration}>
      <h3 className={classes.title}>Authorization</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="Your account's nickname..."
      />
      <input
        type="email"
        className={classes.input}
        placeholder="Your email..."
      />
      <input
        type="password"
        className={classes.input}
        placeholder="Your password..."
      />
      <input
        type="password"
        className={classes.input}
        placeholder="Repeat your password..."
      />
      <button type="submit" className={classes.signIn}>
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
