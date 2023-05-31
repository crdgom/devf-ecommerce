import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/login/Login'
import SingleProduct from '../pages/SingleProduct'
import { useAuthContext } from '../context/AuthContext'
import Dashboard from '../pages/dashboard'
import UserProfile from '../pages/Profile'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={isAuth ? <h1>Dashboard</h1> : <Dashboard />} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/profile/:id' element={<UserProfile />} />
    </Routes>
  )
}
export default RoutesIndex
