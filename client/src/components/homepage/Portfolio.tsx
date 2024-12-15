const YouTubeVideo = () => {
  return (
    <div className="relative max-w-3xl mx-auto p-4">
      {/* Speech bubble with Russian text */}
      <div
        className="absolute left-2 bg-black text-white p-4 rounded-3xl transform -rotate-2 z-10 "
        style={{
          transform: "scaleY(.6) rotate(-6deg)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "24px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "28px",
          width: "396px",
        }}
      >
        <p className="text-lg sm:text-xl font-medium leading-tight">
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
