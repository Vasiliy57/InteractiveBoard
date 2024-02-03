import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
class MyUserStore {
  name = 'Sam'
  id = '355'
  isAuth = true
  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: 'MyUserStore',
      properties: ['name', 'id'],
      storage: window.localStorage,
    })
  }
  setIsAuth = (meaning: boolean) => {
    this.isAuth = meaning
  }
}
export default new MyUserStore()
