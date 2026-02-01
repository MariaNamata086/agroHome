import React from 'react';

interface VideoComponentProps {
  videoSrc: string;
}

const VideoComponent = ({ videoSrc }: VideoComponentProps) => {
  return (
    <div className="flex h-80 md:h-120 w-full">
      <iframe
        src={videoSrc}
        className="w-full h-full rounded-xl"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Farm YouTube Video"
      />
    </div>
  );
};

export default VideoComponent;
