import { Icon } from '@shared/assets'
import { ICON_NAMES } from '@shared/constants'

import classes from './style.module.css'

export const MyProjects: React.FC = () => {
  const listProjects = [
    'Mobile App',
    'Website Redesign',
    'Design System',
    'Wiredraws',
  ]
  return (
    <div className={classes.myProjects}>
      <div className={classes.row}>
        <span className={classes.title}>MY PROJECTS</span>
        <button className={classes.btn}>
          <Icon name={ICON_NAMES.ADD} />
        </button>
      </div>
      <ul className={classes.list}>
        {listProjects.map((elem) => {
          return (
            <li className={classes.item} key={elem}>
              <span className={classes.circle}></span>
              <a className={classes.link} href="">
                {elem}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
