import { useEffect, useState } from "react";

export const usePlayer = (videoRef: React.RefObject<HTMLVideoElement|null>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const enterFullscreen = () => {
    videoRef.current?.requestFullscreen?.();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoaded = () => setDuration(video.duration);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [videoRef]);

  return {
    isPlaying,
    currentTime,
    duration,
    progress: duration ? (currentTime / duration) * 100 : 0,
    togglePlay,
    seek,
    enterFullscreen,
  };
};
