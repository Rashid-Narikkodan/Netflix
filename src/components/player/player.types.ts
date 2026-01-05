export type VideoPlayerProps = {
  src: string;
};

export type PlayerControlsProps = {
  isPlaying: boolean;
  progress: number;
  duration: number;
  currentTime: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onFullscreen: () => void;
};
