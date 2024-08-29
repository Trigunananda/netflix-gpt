import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
const Browse = () => {
 useNowPlayingMovies()
 usePopularMovies()
 useUpcomingMovies()
 useTrendingMovies()
 useTopRatedMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
            {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
      </div>
  )
}

export default Browse