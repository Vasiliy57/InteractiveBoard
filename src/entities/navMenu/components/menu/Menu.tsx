import { Icon } from '@shared/assets'
import classes from './style.module.css'
import { ICON_NAMES } from '@shared/constants'

const menuList = ['Home', 'Messages', 'Tasks', 'Members', 'Settings']

export const Menu: React.FC = () => {
  return (
    <div className={classes.menu}>
      <ul className={classes.menuList}>
        {menuList.map((item, index) => {
          const typeItem = item.toUpperCase() as keyof typeof ICON_NAMES
          return (
            <li key={index}>
              <a href="" className={classes.link}>
                <Icon name={typeItem} /> <span>{item}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
