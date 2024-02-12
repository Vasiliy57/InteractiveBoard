import { useEffect, useState } from 'react'
import { ColumnForTasks, Filter } from './components'
import { createColumn, filterColor } from '@shared/utils'
import { boardInterface } from '@shared/types'

import classes from './style.module.css'

export const ColumnList: React.FC = () => {
  const [columnList, setColumnList] = useState<boardInterface[]>([
    { title: 'To Do', color: '#5030E5', id: '123asd3432' },
    { title: 'On progress', color: '#FFA500', id: '123asd' },
    // { title: 'Done', color: '#8BC48A' },
  ])

  useEffect(() => {
    filterColor(columnList)
  }, [])

  const addColumn = () => {
    if (columnList.length < 12) {
      setColumnList([...columnList, createColumn()])
    } else {
      console.log('The maximum value has been reached !!!')
    }
  }

  return (
    <div>
      <Filter addColumn={addColumn} />
      <div className={classes.columnList}>
        {columnList.map((elem) => {
          return <ColumnForTasks {...elem} key={elem.id} />
        })}
      </div>
    </div>
  )
}
