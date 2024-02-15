import { useState } from 'react'
import { Modal } from '@shared/ui'
import { FullListParticipants } from './components/FullListParticipants'
import { ParticipantInterface } from '@shared/types/participant'

import defaultAvatar from '@shared/assets/images/avatar.jpg'
import classes from './style.module.css'

interface ListParticipantsProps {
  listParticipants: ParticipantInterface[]
}

export const ListParticipants: React.FC<ListParticipantsProps> = ({
  listParticipants,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <div className={classes.listParticipants} onClick={() => setIsModal(true)}>
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
      <Modal
        setIsModal={setIsModal}
        isModal={isModal}
        title="Project participants"
      >
        <FullListParticipants
          list={listParticipants}
          // onDeleteParticipant={onDeleteParticipant}
        />
      </Modal>
    </div>
  )
}
