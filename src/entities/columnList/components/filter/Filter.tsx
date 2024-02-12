import { Button, Select } from '@shared/ui'
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
      <Button
        fontSize="1.4rem"
        fontWeight="500"
        gap="10px"
        border="def"
        padding="12px 17px"
        onClick={addColumn}
        borderRadius="8px"
      >
        <Icon name={ICON_NAMES.ADD} size="16px" />
        {'Add Tasks line'}
      </Button>
    </div>
  )
}
