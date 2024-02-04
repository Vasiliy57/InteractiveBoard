import { Icon } from '@shared/assets'
import { ListParticipants } from './components'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

interface InfoAboutBoardProps {
  title: string
}

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
        <ListParticipants />
      </div>
    </div>
  )
}
