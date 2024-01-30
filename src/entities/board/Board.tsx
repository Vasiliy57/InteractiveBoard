import { DynamicIcon } from '@shared/assets/icon/DynamicIcon'
import classes from './style.module.css'
import { useState } from 'react'

interface BoardProps {
  color: string
  title: string
}

export const Board: React.FC<BoardProps> = ({ title, color }) => {
  const [name, setName] = useState<string>(title)
  const [isChangeName, setIsChangeName] = useState<boolean>(false)

  const onHandlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) {
      console.log('The maximum length of the value has been exceeded !!!')
    } else {
      setName(e.target.value)
      !isChangeName ? setIsChangeName(true) : null
    }
  }
  const onHandlerSave = () => {
    setIsChangeName(false)
  }

  return (
    <div className={classes.board}>
      <div
        className={classes.row}
        style={{ borderBottom: '3px solid ' + color }}
      >
        <div className={classes.title}>
          <span
            className={classes.circle}
            style={{ backgroundColor: color }}
          ></span>
          <input
            className={classes.input}
            type="text"
            placeholder="Name of the board..."
            value={name}
            onChange={onHandlerName}
          />
          {/* <span className={classes.count}> 33</span> */}
          {isChangeName ? (
            <button className={classes.save} onClick={onHandlerSave}>
              Save
            </button>
          ) : null}
        </div>
        <button
          className={classes.btn}
          style={{ backgroundColor: color + '40' }}
        >
          <DynamicIcon size="10px" name="plus" color={color} />
        </button>
      </div>
    </div>
  )
}
