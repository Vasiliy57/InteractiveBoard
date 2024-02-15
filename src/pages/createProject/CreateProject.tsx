import { Button } from '@shared/ui'
import classes from './style.module.css'
import { ListParticipants } from '@shared/components'

const listParticipants = [
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
  return (
    <form className={classes.project}>
      <h2 className={classes.title}>Create Project</h2>
      <input
        className={classes.input}
        type="text"
        placeholder="Name Project..."
      />

      <ListParticipants listParticipants={listParticipants} />
      <Button padding="5px 10px" borderRadius="5px" border="def">
        Create project
      </Button>
    </form>
  )
}
