import avatarDef from '@shared/assets/images/avatar.jpg'

import classes from './style.module.css'
export const MyUser: React.FC = () => {
  return (
    <div className={classes.user}>
      <div className={classes.column}>
        <div className={classes.name}>Anima Agrawal</div>
        <div className={classes.location}>India</div>
      </div>

      <div className={classes.avatar}>
        <img src={avatarDef} alt="" />
      </div>
    </div>
  )
}
