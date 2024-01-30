import { useEffect, useState } from 'react'
import { Board, Filter, InfoAboutBoard } from '@entities/index'
import { createBoard, filterColor } from '@shared/utils'

import { boardInterface } from '@shared/types'
import classes from './style.module.css'

export const Home: React.FC = () => {
  const [boardList, setBoardList] = useState<boardInterface[]>([
    { title: 'To Do', color: '#5030E5', id: '123asd3432' },
    { title: 'On progress', color: '#FFA500', id: '123asd' },
    // { title: 'Done', color: '#8BC48A' },
  ])

  useEffect(() => {
    filterColor(boardList)
  }, [])

  const addBoard = () => {
    if (boardList.length < 12) {
      setBoardList([...boardList, createBoard()])
    } else {
      console.log('The maximum value has been reached !!!')
    }
  }

  return (
    <div className={classes.home}>
      <InfoAboutBoard title={'Mobile App'} />
      <Filter addBoard={addBoard} />
      <div className={classes.boardList}>
        {boardList.map((elem) => {
          return <Board {...elem} key={elem.id} />
        })}
      </div>
    </div>
  )
}
1
