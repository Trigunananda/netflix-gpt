const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 lg:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-xl md:text-6xl lg:text-4xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-4 md:py-6 text-xs md:text-sm lg:text-sm w-full md:w-2/3 lg:w-1/4">
          {overview}
        </p>
        <div className="my-4 md:m:0">
          <button className="bg-white text-black py-1 md:py-4 px-2 md:p-4 md:px-12 text-lg md:text-xl rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mt-2 md:mt-0 md:ml-2 bg-gray-500 text-white py-2 px-6 md:p-4 md:px-12 text-lg md:text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;
  