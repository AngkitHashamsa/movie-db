import React from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()

  return (
    <section>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error.show && <div className='error'>{error.msg}</div>}
      </form>
    </section>
  )
}

export default SearchForm
