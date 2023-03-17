import { useState, useEffect } from 'react'

function useSearch (callback, defaults) {
  const [search, setSearch] = useState(defaults)

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchInput = e.target.value
    setSearch(searchInput)
    console.log(search)
  }

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        handleSubmit(e)
      }
    }
    document.getElementById('search-navbar').addEventListener('keydown', handleEnter)
    return () => {
      document.getElementById('search-navbar').removeEventListener('keydown', handleEnter)
    }
  }, [])

  return [search, handleSubmit]
}

/* const [search, setSearch] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter' || e.code === 'NumpadEnter') {
        handleSubmit(e)
      }
    }
    document.getElementById('search-navbar').addEventListener('keydown', handleEnter)
    return () => {
      document.getElementById('search-navbar').removeEventListener('keydown', handleEnter)
    }
  }, [])
  const searchInput = e.target.value
  setSearch(searchInput)
  console.log(searchInput)
} */

export default useSearch
