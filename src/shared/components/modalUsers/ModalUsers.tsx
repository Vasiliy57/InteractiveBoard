import { ParticipantInterface } from '@shared/types/participant'
import defaultAvatar from '@shared/assets/images/avatar.jpg'
import classes from './style.module.css'
import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

interface ModalUsersProps {
  list: ParticipantInterface[]
  onDeleteParticipant: (id: string) => void
  onHandlerModal: (meaning: boolean) => void
}

export const ModalUsers: React.FC<ModalUsersProps> = ({
  list,
  onHandlerModal,
  onDeleteParticipant,
}) => {
  const onDelModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    onHandlerModal(false)
  }
  const onHandlerClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  return (
    <div className={classes.modal} onClick={onDelModal}>
      <div className={classes.list} onClick={onHandlerClick}>
        <div className={classes.btnBack} onClick={onDelModal}>
          <Icon name={ICON_NAMES.ARROW_LEFT} size="20px" />
        </div>
        <h2 className={classes.title}>Project participants</h2>

        {list.map((user) => {
          return (
            <div className={classes.user} key={user.id}>
              <div className={classes.row}>
                <div className={classes.avatar} key={user.id}>
                  <img src={user.avatar || defaultAvatar} alt={user.name} />
                </div>
                <div className={classes.name}>{user.name}</div>
              </div>
              <button
                className={classes.del}
                onClick={() => onDeleteParticipant(user.id)}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
