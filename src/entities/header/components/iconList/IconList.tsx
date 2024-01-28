import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'
export const IconList: React.FC = () => {
  return (
    <div className={classes.list}>
      <a href="">
        <Icon name={ICON_NAMES.CALENDAR} />
      </a>
      <a href="">
        <Icon name={ICON_NAMES.QUESTION} />
      </a>
      <a href="">
        <Icon name={ICON_NAMES.NOTIFICATION} />
      </a>
    </div>
  )
}
