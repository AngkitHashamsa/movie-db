import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Movies = () => {
  const { data: movies, loading } = useGlobalContext()
  const url = `https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg`
  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <section className='movies'>
      {movies.map((item) => {
        // console.log(item)
        const { Title, Year, imdbID, Poster } = item
        return (
          <Link key={imdbID} to={`/movie/${imdbID}`}>
            <div className='movie'>
              <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
              <div className='movie-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
