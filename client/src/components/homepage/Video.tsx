import black from "../../assets/homepage/black.svg";

const YouTubeVideo = () => {
  return (
    <div className="relative max-w-3xl mx-auto p-4">
      {/* Speech bubble with text */}
      <div className="absolute left-0 top-0 z-10">
        <img src={black} alt="black" className="w-[300px]" />
        <p className="absolute top-1/2 left-1/2 rotate-[-10deg] transform -translate-x-1/2 -translate-y-1/2 text-white text-lg sm:text-xl font-medium leading-tight whitespace-nowrap">
          Magic Starts Here!
        </p>
      </div>

      {/* YouTube video container */}
      <div className="p-8 text-white justify-center">
        {/* Video embed container with responsive aspect ratio */}
        <div className="relative w-full pt-[56.25%] rounded-3xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-3xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
