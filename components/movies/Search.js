import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import classes from './search.module.css'

export default function Search(props) {

  const searchRef = useRef(null);
  const [results, setResults] = useState([]);


  const onChange = useCallback((event) => {
    const query = event.target.value;
    props.passQuery(query);
  }, [])

  return (
    <div
      className={classes.container}
      ref={searchRef}
    >
      <input
        className={classes.search}
        onChange={onChange}
        placeholder='Search movie, TV shows or actors'
        type='text'
      />
      
    </div>
  )
}