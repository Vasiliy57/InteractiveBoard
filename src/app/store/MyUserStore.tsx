import { makeAutoObservable } from 'mobx'
class MyUserStore {
  name = ''
  id = ''
  isAuth = true
  constructor() {
    makeAutoObservable(this)
  }
  setIsAuth = (meaning: boolean) => {
    this.isAuth = meaning
  }
}
export default new MyUserStore()
