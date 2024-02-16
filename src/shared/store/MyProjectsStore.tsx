import { makeAutoObservable } from 'mobx'
// import { makePersistable } from 'mobx-persist-store'

interface ProjectInterface {
  id: string
  title: string
}

class MyProjectsStore {
  listMyProjects: ProjectInterface[] = [
    { id: 'sadsadd234', title: 'Mobile App' },
    { id: '2134asd', title: 'Website Redesign' },
    { id: '123s452s', title: 'Design System' },
    { id: '123sad523', title: 'Wiredraws' },
  ]

  constructor() {
    makeAutoObservable(this)

    // makePersistable(this, {
    //   name: 'MyProjectsStore',
    //   properties: ['currentProject'],
    //   storage: window.localStorage,
    // })
  }

  // setCurrentProject = (project: ProjectInterface) => {
  //   this.currentProject = project
  // }
}
export default new MyProjectsStore()
