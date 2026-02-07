import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

function Carousel({
  images,
  imagesArrays,
}: {
  images?: StaticImageData[];
  imagesArrays?: StaticImageData[][];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === ((images?.length || imagesArrays?.length) ?? 0) - 1
          ? 0
          : currentIndex + 1,
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="relative overflow-hidden h-full ">
      {images?.map((img, index) => (
        <div
          key={index}
          className={`w-full h-full absolute top-0 left-0 overflow-hidden transition-all ease-out duration-1000 ${
            index === currentIndex ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            className="object-cover h-full w-full"
            alt="images of the project"
            quality={90}
          />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-3.75 flex gap-1 items-center justify-center">
        {images?.map((_, index) => (
          <button
            aria-label="dot"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-2 transition-all delay-150 ease-in rounded-full border border-gray-400 ${
              index === currentIndex
                ? 'bg-primaryGreen w-6.5'
                : 'bg-white w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
