import { InfoAboutBoard } from '@entities/index'
import { ColumnList } from '@entities/columnList/ColumnList'

import classes from './style.module.css'

const projects = [
  {
    title: 'Mobile App',
    id: '123sa',
    projectParticipants: [
      { avatar: '', id: '1', name: 'Sam' },
      { avatar: '', id: '2', name: 'Alex' },
      { avatar: '', id: '3', name: 'Vitya Ak' },
      { avatar: '', id: '4', name: 'Los' },
      { avatar: '', id: '5', name: 'Amanda' },
      { avatar: '', id: '6', name: 'Indiana' },
      { avatar: '', id: '7', name: 'Karl' },
      { avatar: '', id: '8', name: 'John' },
    ],
  },
]

// ParticipantInterface[]
export const Home: React.FC = () => {
  return (
    <div className={classes.home}>
      {projects.length ? (
        <>
          <InfoAboutBoard
            title={projects[0].title}
            listParticipants={projects[0].projectParticipants}
          />
          <ColumnList />
        </>
      ) : (
        <div></div>
      )}
    </div>
  )
}
