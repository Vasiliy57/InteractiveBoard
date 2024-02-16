import { useState } from 'react'
import { ListParticipants } from '@shared/components'
import { Button, Modal } from '@shared/ui'

import classes from './style.module.css'
import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

const listParticipants = [
  { avatar: '', id: '1', name: 'Sam' },
  { avatar: '', id: '2', name: 'Alex' },
  { avatar: '', id: '3', name: 'Vitya Ak' },
  { avatar: '', id: '4', name: 'Los' },
]
const fullList = [
  { avatar: '', id: '1', name: 'Sam' },
  { avatar: '', id: '2', name: 'Alex' },
  { avatar: '', id: '3', name: 'Vitya Ak' },
  { avatar: '', id: '4', name: 'Los' },
  { avatar: '', id: '5', name: 'Amanda' },
  { avatar: '', id: '6', name: 'Indiana' },
  { avatar: '', id: '7', name: 'Karl' },
  { avatar: '', id: '8', name: 'John' },
]
export const CreateProject: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const onHandlerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModal(true)
  }
  return (
    <form className={classes.project}>
      <h2 className={classes.title}>Create Project</h2>
      <input
        className={classes.input}
        type="text"
        placeholder="Name Project..."
      />

      <Button
        color="purpure"
        fontWeight="600"
        fontSize="1.8rem"
        onClick={onHandlerClick}
      >
        <Icon name={ICON_NAMES.ADD_PURPURE} size="20px" /> Invite Participants
      </Button>

      <Button padding="5px 10px" borderRadius="5px" border="def">
        Create project
      </Button>

      <Modal
        setIsModal={setIsModal}
        isModal={isModal}
        title="Project participants"
      >
        <ListParticipants
          list={listParticipants}
          typeList="combined"
          fullList={fullList}
        />
      </Modal>
    </form>
  )
}
