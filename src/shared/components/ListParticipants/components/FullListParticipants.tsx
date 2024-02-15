import { ParticipantInterface } from '@shared/types/participant'
import { Button } from '@shared/ui'
import defaultAvatar from '@shared/assets/images/avatar.jpg'
import classes from './style.module.css'

interface FullListParticipantsProps {
  list: ParticipantInterface[]
  // onDeleteParticipant: (id: string) => void
}

export const FullListParticipants: React.FC<FullListParticipantsProps> = ({
  list,
  // onDeleteParticipant,
}) => {
  return (
    <div className={classes.list}>
      {list.map((user) => {
        return (
          <div className={classes.user} key={user.id}>
            <div className={classes.row}>
              <div className={classes.avatar} key={user.id}>
                <img src={user.avatar || defaultAvatar} alt={user.name} />
              </div>
              <div className={classes.name}>{user.name}</div>
            </div>

            <Button
              // onClick={() => onDeleteParticipant(user.id)}
              border="def"
              borderRadius="5px"
              padding="3px 5px"
              fontSize="1.4rem"
            >
              Delete
            </Button>
          </div>
        )
      })}
    </div>
  )
}
