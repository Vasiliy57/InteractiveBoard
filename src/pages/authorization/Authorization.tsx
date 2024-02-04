import { Link } from 'react-router-dom'
import { ROUTING } from '@shared/constants'

import classes from './style.module.css'

export const Authorization: React.FC = () => {
  return (
    <form className={classes.authorization}>
      <h3 className={classes.title}>Authorization</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="Your account's nickname..."
      />
      <input
        type="password"
        className={classes.input}
        placeholder="Your password..."
      />
      <button type="submit" className={classes.signIn}>
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
