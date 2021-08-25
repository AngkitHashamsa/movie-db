import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from './useFetch'
import { Link } from 'react-router-dom'
const SingleMovie = () => {
  const { id } = useParams()
  const { data: movie, loading, error } = useFetch(`&i=${id}`)
  console.log(movie)
  if (loading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  const {
    Poster,
    Plot,
    Title,
    Year,
    Rated,
    Actors,
    imdbRating,
    Production,
    Genre,
  } = movie
  return (
    <section className='single-movie '>
      <img src={Poster} alt={Title} />
      <div>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>Year: {Year}</h4>
        <h4>Rated: {Rated}</h4>
        <h4>Actors: {Actors}</h4>
        <h4>imdbRating: {imdbRating}</h4>
        <h4>Production: {Production}</h4>
        <h4>Genre: {Genre}</h4>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
