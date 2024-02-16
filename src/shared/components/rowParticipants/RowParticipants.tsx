import { useState } from 'react'
import { Modal } from '@shared/ui'
import { ListParticipants } from '../listParticipants/ListParticipants'
import { ParticipantInterface } from '@shared/types/participant'
import { getRandomColorRGB } from '@shared/utils/getColor'

import classes from './style.module.css'

interface RowParticipantsProps {
  listParticipants: ParticipantInterface[]
  typeList: 'delete' | 'add' | 'combined'
}

export const RowParticipants: React.FC<RowParticipantsProps> = ({
  listParticipants,
  typeList,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <div className={classes.listParticipants} onClick={() => setIsModal(true)}>
      {listParticipants.map((user, index) => {
        const isAvatar: boolean = Boolean(user.avatar)
        if (index < 4) {
          return (
            <div
              className={classes.avatar}
              key={user.id}
              style={{ backgroundColor: getRandomColorRGB() }}
            >
              {isAvatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <span className={classes.name}>
                  {user.name[0].toUpperCase()}
                </span>
              )}
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
        <ListParticipants
          typeList={typeList}
          list={listParticipants}

          // onDeleteParticipant={onDeleteParticipant}
        />
      </Modal>
    </div>
  )
}
