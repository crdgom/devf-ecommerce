// * This is a custom hook that can be used to handle form input changes and submit events.
// * It takes a callback function and an object of default values as arguments.
// * It returns an array of the input values (is valid on any form in the SPA), a function to handle input changes, and a function to handle form submission.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  // useEffect se utiliza para manejar efectos secundarios en los componentes de React (manejar APIS)
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Función que se ejecuta cada vez que haya un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    // Evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
