import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="slider-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider details={actionMovies} />
        <h1 className="heading">Comedy Movies </h1>
        <MoviesSlider details={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
