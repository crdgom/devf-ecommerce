import connect from '../../helpers/ApiConfig'

const Home = () => {
  return (
    <div className='App container-mx-auto bg-white dark:bg-black w-screen h-screen'>
      <h1 className='mb-4 text-4xl text-center dark:text-white font-extrabold'>All Products</h1>
      {
        connect()
      }
    </div>
  )
}

export default Home
