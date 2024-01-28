import { Icon } from '@shared/assets'

import defaultAvatar from '@shared/assets/images/avatar.jpg'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

interface InfoAboutBoardProps {
  title: string
}

const listParticipants = [
  { avatar: '', id: 1, name: 'sad' },
  { avatar: '', id: 2, name: '' },
  { avatar: '', id: 3, name: '' },
  { avatar: '', id: 4, name: '' },
  { avatar: '', id: 5, name: '' },
  { avatar: '', id: 6, name: '' },
  { avatar: '', id: 7, name: '' },
  { avatar: '', id: 8, name: '' },
]

export const InfoAboutBoard: React.FC<InfoAboutBoardProps> = ({ title }) => {
  return (
    <div className={classes.infoAboutBoard}>
      <div className={classes.rowLeft}>
        <h1 className={classes.title}>{title}</h1>
        <button className={classes.btn}>
          <Icon name={ICON_NAMES.EDIT} />
        </button>
        <button className={classes.btn}>
          <Icon name={ICON_NAMES.LINK} />
        </button>
      </div>
      <div className={classes.rowRight}>
        <button className={classes.btnInvite}>
          <Icon name={ICON_NAMES.ADD_PURPURE} size="15px" /> Invite
        </button>
        <div className={classes.listParticipants}>
          {listParticipants.map((user, index) => {
            if (index < 4) {
              return (
                <div className={classes.avatar} key={user.id}>
                  <img src={user.avatar || defaultAvatar} alt={user.name} />
                </div>
              )
            } else if (index === 4) {
              return (
                <div className={classes.noAvatar} key={user.id}>
                  +{listParticipants.length - 4}
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
