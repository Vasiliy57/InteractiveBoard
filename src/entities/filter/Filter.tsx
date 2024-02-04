import { Select } from '@shared/ui'
import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

interface FilterProps {
  addColumn: () => void
}

export const Filter: React.FC<FilterProps> = ({ addColumn }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.row}>
        <Select selectType="filter" />
        <Select selectType="calendar" />
      </div>
      <button className={classes.btn} onClick={addColumn}>
        <Icon name={ICON_NAMES.ADD} size="16px" />
        {'Add Tasks line'}
      </button>
    </div>
  )
}
