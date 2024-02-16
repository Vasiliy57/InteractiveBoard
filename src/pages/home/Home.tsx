import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InfoAboutBoard } from '@entities/index'
import { ColumnList } from '@entities/columnList/ColumnList'
import { ParticipantInterface } from '@shared/types/participant'

import classes from './style.module.css'

const projectMoc = {
  title: 'Mobile App',
  id: '123sa',
  listParticipants: [
    { avatar: '', id: '1', name: 'Sam' },
    { avatar: '', id: '2', name: 'Alex' },
    { avatar: '', id: '3', name: 'Vitya Ak' },
    { avatar: '', id: '4', name: 'Los' },
    { avatar: '', id: '5', name: 'Amanda' },
    { avatar: '', id: '6', name: 'Indiana' },
    { avatar: '', id: '7', name: 'Karl' },
    { avatar: '', id: '8', name: 'John' },
  ],
}
interface projectInterface {
  title: string
  id: string
  listParticipants: ParticipantInterface[]
}

export const Home: React.FC = () => {
  const [project, setProject] = useState<projectInterface | null>(projectMoc)
  const navigate = useNavigate()

  useEffect(() => {
    if (!project) navigate('/blank')
  }, [project, navigate])

  return (
    <div className={classes.home}>
      {project && (
        <InfoAboutBoard
          title={project.title}
          listParticipants={project.listParticipants}
        />
      )}

      <ColumnList />
    </div>
  )
}
