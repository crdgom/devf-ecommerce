import { useState, useEffect } from 'react'
import { getAllProductsService } from '../services/useItems'
import { Link } from 'react-router-dom'

const ProductGrid = () => {
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const result = await getAllProductsService()
        if (result.status === 200) {
          setItemsData(result.data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchItemsData()
  }, [])
  return (
    <>
      <div className='p-8'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {itemsData && itemsData.map((product) => (

            <div className='border p-4' key={product._id}>
              <img src={product.image} alt={product.title} className='mb-4' />
              <h2 className='font-bold text-lg mb-2'>{product.title}</h2>
              <p className='text-gray-700'>{product.description}</p>
              <Link to={`product/${product._id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'>
                Comprar
              </Link>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default ProductGrid
