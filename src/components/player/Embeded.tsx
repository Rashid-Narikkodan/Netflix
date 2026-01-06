type EmbedPlayerProps = {
  src: string;
};

const EmbedPlayer = ({ src }: EmbedPlayerProps) => {
  return (
    <iframe
      src={src}
      className="h-full w-full"
      allow="autoplay; fullscreen"
      referrerPolicy="no-referrer"
      allowFullScreen
    />
  );
};

export default EmbedPlayer;
