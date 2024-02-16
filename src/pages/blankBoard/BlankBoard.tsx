import { Link } from 'react-router-dom'
import { Icon } from '@shared/assets'
import { ICON_NAMES, ROUTING } from '@shared/constants'

import classes from './style.module.css'
export const BlankBoard: React.FC = () => {
  return (
    <div className={classes.blankBoard}>
      <h2 className={classes.title2}>
        You don't have more than one project at the moment
      </h2>

      <Link to={ROUTING.CREATE_PROJECT} className={classes.link}>
        <Icon name={ICON_NAMES.ADD} size="20px" />
        Create Project
      </Link>
    </div>
  )
}
