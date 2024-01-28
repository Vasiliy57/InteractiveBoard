import { Select } from '@shared/ui'
import classes from './style.module.css'
import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

interface FilterProps {
  addBoard: () => void
}

export const Filter: React.FC<FilterProps> = ({ addBoard }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.row}>
        <Select selectType="filter" />
        <Select selectType="calendar" />
      </div>
      <button className={classes.btn} onClick={addBoard}>
        <Icon name={ICON_NAMES.ADD} size="16px" />
        {'Add Tasks line'}
      </button>
    </div>
  )
}
