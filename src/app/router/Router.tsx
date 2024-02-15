import { observer } from 'mobx-react-lite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Authorization, CreateProject, Home, Registration } from '@pages/index'
import MyUserStore from '@shared/store/MyUserStore'

import { ROUTING } from '@shared/constants'

export const Router: React.FC = observer(() => {
  const { isAuth } = MyUserStore

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path={ROUTING.HOME} element={<Home />} />
          <Route path={ROUTING.CREATE_PROJECT} element={<CreateProject />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={ROUTING.REGISTRATION} element={<Registration />} />
          <Route path={ROUTING.AUTHORIZATION} element={<Authorization />} />
          <Route path="/" element={<Authorization />} />
        </Routes>
      )}
    </BrowserRouter>
  )
})
