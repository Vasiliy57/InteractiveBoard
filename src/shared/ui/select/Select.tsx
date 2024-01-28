import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'
interface SelectProps {
  selectType: 'calendar' | 'filter'
}

export const Select: React.FC<SelectProps> = ({ selectType }) => {
  if (selectType == 'calendar') {
    return (
      <div className={classes.select}>
        <div className={classes.content}>
          <Icon name={ICON_NAMES.CALENDAR_NUMBER} />
          <span className={classes.text}>Today</span>
          <Icon name={ICON_NAMES.ARROW_DOWN} />
        </div>
      </div>
    )
  } else if (selectType == 'filter') {
    return (
      <div className={classes.select}>
        <div className={classes.content}>
          <Icon name={ICON_NAMES.FILTER} />
          <span className={classes.text}>Filter</span>
          <Icon name={ICON_NAMES.ARROW_DOWN} />
        </div>
      </div>
    )
  }
}
