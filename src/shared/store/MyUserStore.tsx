import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

interface sessionInterface {
  refreshToken: string
  accessToken: string
}

class MyUserStore {
  email: string | null = null
  login: string | null = null
  id: string | null = null
  isAuth: boolean = false
  session: sessionInterface | null = null

  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: 'MyUserStore',
      properties: ['email', 'login', 'id', 'isAuth', 'session'],
      storage: window.localStorage,
    })
  }
  logOut = () => {
    this.isAuth = false
    this.email = null
    this.login = null
    this.id = null
    this.session = null
  }

  loggedIn = (
    email: string,
    login: string,
    id: string,
    session: sessionInterface
  ) => {
    this.email = email
    this.login = login
    this.id = id
    this.session = session
    this.isAuth = true
  }
}
export default new MyUserStore()
