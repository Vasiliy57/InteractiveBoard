import { ParticipantInterface } from '@shared/types/participant'
import { Button } from '@shared/ui'
import defaultAvatar from '@shared/assets/images/avatar.jpg'
import classes from './style.module.css'

interface ListParticipantsProps {
  list: ParticipantInterface[]
  typeList: 'delete' | 'add' | 'combined'
  fullList?: ParticipantInterface[]
}

export const ListParticipants: React.FC<ListParticipantsProps> = ({
  list,
  typeList,
  fullList,
}) => {
  const onHandlerParticipant = (id: string, isInArray = false) => {
    console.log(id)

    if (typeList === 'delete' || isInArray) {
      // delete participant from base
    } else if (typeList === 'add' || !isInArray) {
      // add participant in base
    }
  }

  if (typeList === 'combined') {
    return (
      <div className={classes.list}>
        {fullList!.map((user) => {
          const isInArray: boolean = Boolean(
            list?.some((elem) => elem.id === user.id)
          )
          return (
            <div className={classes.user} key={user.id}>
              <div className={classes.row}>
                <div className={classes.avatar} key={user.id}>
                  <img src={user.avatar || defaultAvatar} alt={user.name} />
                </div>
                <div className={classes.name}>{user.name}</div>
              </div>

              <Button
                onClick={() => onHandlerParticipant(user.id, isInArray)}
                border="def"
                borderRadius="5px"
                padding="3px 5px"
                fontSize="1.4rem"
              >
                {isInArray ? 'Delete' : 'Add'}
              </Button>
            </div>
          )
        })}
      </div>
    )
  } else {
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
                onClick={() => onHandlerParticipant(user.id)}
                border="def"
                borderRadius="5px"
                padding="3px 5px"
                fontSize="1.4rem"
              >
                {typeList === 'delete' ? 'Delete' : 'Add'}
              </Button>
            </div>
          )
        })}
      </div>
    )
  }
}
