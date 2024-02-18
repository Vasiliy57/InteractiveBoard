import { Link } from 'react-router-dom'
import { Icon } from '@shared/assets'
import { observer } from 'mobx-react-lite'
import MyProjectsStore from '@shared/store/MyProjectsStore'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

export const MyProjects: React.FC = observer(() => {
  const { listMyProjects } = MyProjectsStore
  return (
    <div className={classes.myProjects}>
      <div className={classes.row}>
        <span className={classes.title}>MY PROJECTS</span>
        <button className={classes.btn}>
          <Icon name={ICON_NAMES.ADD} />
        </button>
      </div>
      <ul className={classes.list}>
        {listMyProjects.map((elem) => {
          return (
            <li className={classes.item} key={elem.id}>
              <span className={classes.circle}></span>

              <Link className={classes.link} to={`/project/${elem.id}`}>
                {elem.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
})
