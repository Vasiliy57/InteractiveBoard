import { Menu, MyProjects } from './components'
import classes from './style.module.css'

export const NavMenu: React.FC = () => {
  return (
    <div className={classes.nav}>
      <Menu />
      <MyProjects />
    </div>
  )
}
