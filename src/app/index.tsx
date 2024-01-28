import { Router } from './router/Router'
import './style/null-style.css'
import './style/base-style.css'
import { AppProvider } from './provider'

export const App: React.FC = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
