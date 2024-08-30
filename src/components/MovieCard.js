import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 sm:w-44 md:w-48 lg:w-52 pr-2 sm:pr-4">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      />
    </div>
  );
};

export default MovieCard;
