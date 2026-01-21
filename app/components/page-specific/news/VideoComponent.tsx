import React, { Suspense } from 'react';

interface VideoComponentProps {
  videoSrc: string;
}

const VideoComponent = ({ videoSrc }: VideoComponentProps) => {
  return (
    <div className="flex h-50 md:h-auto w-full">
      <iframe src={videoSrc} className="w-full h-full" loading='lazy' allowFullScreen />
    </div>
  );
};

export default VideoComponent;
