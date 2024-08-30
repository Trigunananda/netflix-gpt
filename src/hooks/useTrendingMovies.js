import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies} from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store)=>store.movies.trendingMovies)
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
   !trendingMovies && getPopularMovies();
  }, []);
};

export default useTrendingMovies;