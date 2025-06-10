import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ mainMovie }) => {
  
  useTrailerVideo(mainMovie?.id);
  const trailer = useSelector((state) => state.movies.mainMovieTrailer);

  if (!trailer) return null;

  return (
    <div className="relative top-0 -mt-40 -z-10">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer[0]?.key}?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&loop=1&playlist=${trailer[0]?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
