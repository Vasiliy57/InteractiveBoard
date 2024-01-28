import { Header, NavMenu } from '@entities/index'
import classes from './style.module.css'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.home}>
          <Header />
          <div className={classes.row}>
            <NavMenu />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
