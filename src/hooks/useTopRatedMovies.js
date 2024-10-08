import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies} from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovies && getPopularMovies();
  }, []);
};

export default useTopRatedMovies;