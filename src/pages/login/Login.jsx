import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { loginUserService } from '../../services/useServices'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login:', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='w-full h-screen flex flex-col items-center justify-center px-4'>
      <div className='max-w-sm w-full text-gray-600'>
        <div className='text-center'>
          <img src='https://floatui.com/logo.svg' width={150} className='mx-auto' />
          <div className='mt-5 space-y-2'>
            <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>Log in to your account</h3>
            <p className=''>Don't have an account? <a href='javascript:void(0)' className='font-medium text-indigo-600 hover:text-indigo-500'>Sign up</a></p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mt-8 space-y-5'
        >
          <div>
            <label className='font-medium'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={input.email}
              placeholder='name@example.com'
              onChange={handleInputChange}
              required
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={input.password}
              placeholder='Password'
              onChange={handleInputChange}
              required
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <button
            className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'
            type='submit'
          >
            Sign in
          </button>
          <div className='text-center'>
            <a href='javascript:void(0)' className='hover:text-indigo-600'>Forgot password?</a>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
