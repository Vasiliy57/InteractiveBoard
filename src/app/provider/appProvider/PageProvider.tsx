import { Header, NavMenu } from '@entities/index'
import MyUserStore from '@shared/store/MyUserStore'
import { observer } from 'mobx-react-lite'

import classes from './style.module.css'

interface PageProviderProps {
  children: React.ReactNode
}

export const PageProvider: React.FC<PageProviderProps> = observer(
  ({ children }) => {
    const { isAuth } = MyUserStore
    if (isAuth) {
      return (
        <div className={classes.app}>
          <div className={classes.container}>
            <div>
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
    return (
      <div className={classes.app}>
        <div className={classes.wrap}> {children}</div>
      </div>
    )
  }
)
