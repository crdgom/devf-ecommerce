import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductService } from '../../services/useItems'

const SingleProduct = () => {
  const [itemData, setItemData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    // Traigo mis items de la API y los almaceno en el estado itemsData
    const fetchItemsData = async () => {
      try {
        const result = await getSingleProductService(id)
        if (result.status === 200) {
          setItemData(result.data[0])
          console.log(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchItemsData()
  }, [])
  return (
    <section className='cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8'>
      <div className='absolute top-0 left-0 w-full h-full bg-white opacity-40' />
      <div className='relative z-10 gap-5 items-center lg:flex'>
        <div className='flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left'>
          <h3 className='text-3xl text-gray-800 font-semibold md:text-4xl'>
            {itemData.product_name} by <span className='text-indigo-600'>{itemData.brand}</span>
          </h3>
          <p className='text-gray-500 leading-relaxed mt-3'>
            {itemData.description}
          </p>
          <a
            className='mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center'
            href='javascript:void()'
          >
            <span className='text-lg mr-2'>$</span>
            {itemData.price}
          </a>
        </div>
        <div className='flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto'>
          <img
            src={itemData.image}
            alt={itemData.product_name}
            className='w-full'
          />
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
