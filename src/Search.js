import React from 'react';
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
    <a class="navbar-brand" href="#">EazzyMovie</a>
      <section className='search-section'>
        {/* <div> */}
        <form action="#" onSubmit={(e) => e.preventDefault}>
          <h2>Search Your Movie</h2>
          <input type="text"
            placeholder='Search Movie with...'
            value={query}
          onChange={(e) => setQuery(e.target.value)} />
          {/* </div> */}
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search