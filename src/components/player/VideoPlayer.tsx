import { useRef, useState } from "react";
import { usePlayer } from "./usePlayer";
import PlayerControls from "./PlayerControls";
import type { VideoPlayerProps } from "./player.types";

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(true);

  const {
    isPlaying,
    progress,
    currentTime,
    duration,
    togglePlay,
    seek,
    enterFullscreen,
  } = usePlayer(videoRef);

  return (
    <div
      className="relative h-full w-full bg-black overflow-hidden"
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video */}
      <video
      src={src}
      className="h-full w-full"
      autoPlay
    />

      {/* Center Play Button (Netflix feel) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-black/60 p-6 backdrop-blur">
            ▶
          </div>
        </button>
      )}

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/90 to-transparent" />

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <PlayerControls
          isPlaying={isPlaying}
          progress={progress}
          currentTime={currentTime}
          duration={duration}
          onPlayPause={togglePlay}
          onSeek={seek}
          onFullscreen={enterFullscreen}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
