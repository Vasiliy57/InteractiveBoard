import { IconList, Logo, MyUser, Search } from './components'

import classes from './style.module.css'
export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.row}>
        <Logo />
        <Search />
      </div>
      <div className={classes.rowRight}>
        <IconList />
        <MyUser />
      </div>
    </div>
  )
}
