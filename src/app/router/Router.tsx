import { observer } from 'mobx-react-lite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Authorization, Home, Registration } from '@pages/index'
import MyUserStore from '@app/store/MyUserStore'

import { ROUTING } from '@shared/constants'

export const Router: React.FC = observer(() => {
  const { isAuth } = MyUserStore

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path={ROUTING.HOME} element={<Home />} />
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
