import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import MyUserStore from '@app/store/MyUserStore'

import avatarDef from '@shared/assets/images/avatar.jpg'
import classes from './style.module.css'

export const MyUser: React.FC = observer(() => {
  const [isSelect, setIsSelect] = useState<boolean>(false)
  const { setIsAuth } = MyUserStore

  const onHandlerSelect = () => {
    setIsSelect((prev) => !prev)
  }
  const onHandlerExit = () => {
    setIsAuth(false)
  }

  return (
    <div className={classes.myUser}>
      <div className={classes.row} onClick={onHandlerSelect}>
        <div className={classes.column}>
          <div className={classes.name}>Anima Agrawal</div>
          <div className={classes.location}>India</div>
        </div>

        <div className={classes.avatar}>
          <img src={avatarDef} alt="" />
        </div>
      </div>
      {isSelect && (
        <ul className={classes.select}>
          <li className={classes.link}>Page User</li>
          <li className={classes.exit} onClick={onHandlerExit}>
            Exit
          </li>
        </ul>
      )}
    </div>
  )
})
