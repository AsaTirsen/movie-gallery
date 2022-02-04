import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import classes from './search.module.css'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

//   const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    // if (query.length) {
    //   fetch(searchEndpoint(query))
    //     .then(res => res.json())
    //     .then(res => {
    //       setResults(res.results)
    //     })
    // } else {
    //   setResults([])
    // }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={classes.container}
      ref={searchRef}
    >
      <input
        className={classes.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search movie, TV shows or actors'
        type='text'
        value={query}
      />
      
    </div>
  )
}