import type { PlayerControlsProps } from "./player.types";

const PlayerControls = ({
  isPlaying,
  duration,
  currentTime,
  onPlayPause,
  onSeek,
  onFullscreen,
}: PlayerControlsProps) => {
  return (
    <div className="px-6 pb-4 text-white">
      {/* Progress */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="w-full accent-red-600"
      />

      {/* Controls Row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onPlayPause} className="text-lg">
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <span className="text-sm text-zinc-300">
            {Math.floor(currentTime)} / {Math.floor(duration)}s
          </span>
        </div>

        <button onClick={onFullscreen}>⛶</button>
      </div>
    </div>
  );
};

export default PlayerControls;
