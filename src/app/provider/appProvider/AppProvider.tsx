import { Header, NavMenu } from '@entities/index'
import MyUserStore from '@app/store/MyUserStore'
import classes from './style.module.css'
import { observer } from 'mobx-react-lite'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = observer(
  ({ children }) => {
    const { isAuth } = MyUserStore

    return (
      <div className={classes.app}>
        <div className={classes.container}>
          {isAuth ? (
            <div className={classes.home}>
              <Header />
              <div className={classes.row}>
                <NavMenu />
                {children}
              </div>
            </div>
          ) : (
            <div> {children}</div>
          )}
        </div>
      </div>
    )
  }
)
