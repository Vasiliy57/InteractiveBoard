import { Board, Filter, InfoAboutBoard } from '@entities/index'
import classes from './style.module.css'
import { useState } from 'react'

export const Home: React.FC = () => {
  const [boardList, setBoardList] = useState([
    { title: 'To Do', color: '#5030E5' },
    { title: 'On progress', color: '#FFA500' },
    { title: 'Done', color: '#8BC48A' },
  ])
  const addBoard = () => {
    
  }

  return (
    <div className={classes.home}>
      <InfoAboutBoard title={'Mobile App'} />
      <Filter addBoard={addBoard} />
      <div className={classes.boardList}>
        {boardList.map((elem) => {
          return <Board {...elem} key={elem.title} />
        })}
      </div>
    </div>
  )
}
