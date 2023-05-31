import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RoutesIndex from './routes/index'
import NavBar from './components/NavBar'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
