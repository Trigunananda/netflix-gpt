import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
  const dispatch = useDispatch()

  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }, [dispatch]) // Dependency for useCallback

  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies()
  }, [getNowPlayingMovies]) // Added getNowPlayingMovies here
}

export default useNowPlayingMovies
