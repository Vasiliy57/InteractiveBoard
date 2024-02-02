import { useState } from 'react'
import { ModalUsers } from '@shared/components/modalUsers/ModalUsers'
import defaultAvatar from '@shared/assets/images/avatar.jpg'
import { createPortal } from 'react-dom'
import { ParticipantInterface } from '@shared/types/participant'

import classes from './style.module.css'

export const ListParticipants: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [listParticipants, setListParticipants] = useState<
    ParticipantInterface[]
  >([
    { avatar: '', id: '1', name: 'Sam' },
    { avatar: '', id: '2', name: 'Alex' },
    { avatar: '', id: '3', name: 'Vitya Ak' },
    { avatar: '', id: '4', name: 'Los' },
    { avatar: '', id: '5', name: 'Amanda' },
    { avatar: '', id: '6', name: 'Indiana' },
    { avatar: '', id: '7', name: 'Karl' },
    { avatar: '', id: '8', name: 'John' },
  ])

  const onHandlerModal = (meaning: boolean) => {
    setIsModal(meaning)
  }
  const onDeleteParticipant = (id: string) => {
    setListParticipants((prev) => {
      return prev.filter((user) => user.id !== id)
    })
  }
  return (
    <div
      className={classes.listParticipants}
      onClick={() => onHandlerModal(true)}
    >
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

      {isModal &&
        createPortal(
          <ModalUsers
            list={listParticipants}
            onHandlerModal={onHandlerModal}
            onDeleteParticipant={onDeleteParticipant}
          />,
          document.body
        )}
    </div>
  )
}