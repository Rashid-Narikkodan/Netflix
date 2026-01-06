import {
  Play,
  Pause,
  Maximize,
} from "lucide-react";
import type { PlayerControlsProps } from "./player.types";

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const PlayerControls = ({
  isPlaying,
  duration,
  currentTime,
  onPlayPause,
  onSeek,
  onFullscreen,
}: PlayerControlsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-6 pb-4 text-white">
      {/* Progress Bar */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="
          w-full cursor-pointer
          accent-red-600
          h-1
        "
      />

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        {/* Left Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onPlayPause}
            className="
              flex items-center justify-center
              rounded-full
              hover:scale-110
              transition
            "
          >
            {isPlaying ? (
              <Pause size={36} />
            ) : (
              <Play size={36} />
            )}
          </button>

          <span className="text-sm text-zinc-300">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Right Controls */}
        <button
          onClick={onFullscreen}
          className="hover:scale-110 transition"
        >
          <Maximize size={24} />
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
