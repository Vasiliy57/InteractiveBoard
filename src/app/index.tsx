import { Router } from './router/Router'
import './style/null-style.css'
import './style/base-style.css'
import { PageProvider } from './provider'
import { BrowserRouter } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageProvider>
        <Router />
      </PageProvider>
    </BrowserRouter>
  )
}
