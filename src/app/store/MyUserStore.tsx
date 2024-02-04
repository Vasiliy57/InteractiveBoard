import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class MyUserStore {
  name: string = 'Sam'
  id: string = '355'
  isAuth: boolean = true

  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: 'MyUserStore',
      properties: ['name', 'id', 'isAuth'],
      storage: window.localStorage,
    })
  }
  setIsAuth = (meaning: boolean) => {
    this.isAuth = meaning
  }
}
export default new MyUserStore()
