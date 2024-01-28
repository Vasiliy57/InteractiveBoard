import { Icon } from '@shared/assets'
import classes from './style.module.css'
import logo from '@shared/assets/images/logo.jpg'
import { ICON_NAMES } from '@shared/constants'
export const Logo: React.FC = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.img}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.name}>Project M.</div>
      <a href="">
        <Icon name={ICON_NAMES.DOUBLE_ARROW} />
      </a>
    </div>
  )
}
