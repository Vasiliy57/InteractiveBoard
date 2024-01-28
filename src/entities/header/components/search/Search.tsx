import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

export const Search: React.FC = () => {
  return (
    <div className={classes.search}>
      <Icon name={ICON_NAMES.SEARCH} />
      <input
        className={classes.input}
        type="text"
        placeholder="Search for anything..."
      />
    </div>
  )
}
