import { Icon } from '@shared/assets'
import { ListParticipants } from '@shared/components'
import { ICON_NAMES } from '@shared/constants'
import { Button } from '@shared/ui'
import { ParticipantInterface } from '@shared/types/participant'
import classes from './style.module.css'

interface InfoAboutBoardProps {
  title: string
  listParticipants: ParticipantInterface[]
}

export const InfoAboutBoard: React.FC<InfoAboutBoardProps> = ({
  title,
  listParticipants,
}) => {
  return (
    <div className={classes.infoAboutBoard}>
      <div className={classes.rowLeft}>
        <h1 className={classes.title}>{title}</h1>
        <Button>
          <Icon name={ICON_NAMES.EDIT} />
        </Button>
        <Button>
          <Icon name={ICON_NAMES.LINK} />
        </Button>
      </div>
      <div className={classes.rowRight}>
        <Button color="purpure" fontSize="1.6rem" fontWeight="500">
          <Icon name={ICON_NAMES.ADD_PURPURE} size="15px" /> Invite
        </Button>
        <ListParticipants listParticipants={listParticipants} />
      </div>
    </div>
  )
}
