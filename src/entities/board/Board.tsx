import { DynamicIcon } from '@shared/assets/icon/DynamicIcon'
import classes from './style.module.css'

interface BoardProps {
  title: string
  color: string
}

export const Board: React.FC<BoardProps> = ({ title, color }) => {
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
          <span className={classes.text}>{title}</span>
          <span className={classes.count}>9</span>
        </div>
        <button
          className={classes.btn}
          style={{ backgroundColor: color + '40' }}
        >
          {' '}
          <DynamicIcon size="10px" name="plus" color={color} />
        </button>
      </div>
    </div>
  )
}
