import { DynamicIcon } from '@shared/assets/icon/DynamicIcon'
import { useState } from 'react'

import classes from './style.module.css'
import { Button } from '@shared/ui'

interface ColumnForTasksProps {
  color: string
  title: string
}

export const ColumnForTasks: React.FC<ColumnForTasksProps> = ({
  title,
  color,
}) => {
  const [name, setName] = useState<string>(title)
  const [isChangeName, setIsChangeName] = useState<boolean>(false)

  const onHandlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputStroke = e.target.value
    if (inputStroke.length > 15) {
      console.log('The maximum length of the value has been exceeded !!!')
    } else {
      setName(inputStroke)
      if (!isChangeName) setIsChangeName(true)
    }
  }
  const onHandlerSave = () => {
    setIsChangeName(false)
  }

  const transparent = '40'

  return (
    <div className={classes.column}>
      <div
        className={classes.row}
        style={{ borderBottom: '3px solid ' + color }}
      >
        <div className={classes.title}>
          <div className={classes.circle} style={{ backgroundColor: color }} />
          <input
            className={classes.input}
            type="text"
            placeholder="Name of the column..."
            value={name}
            onChange={onHandlerName}
          />

          {isChangeName && (
            <button className={classes.save} onClick={onHandlerSave}>
              Save
            </button>
          )}
        </div>
        <Button bgColor={color + transparent} borderRadius="5px" padding="7px">
          <DynamicIcon size="10px" name="plus" color={color} />
        </Button>
      </div>
    </div>
  )
}
