import React from "react";
import fallbackImage from "../assets/fallback.svg";

export type ImageProps = {
  alt: string;
  src: string;
  width: string;
  height: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  width,
  height,
  className,
}) => {
  const imageSrc = src || fallbackImage;

  const handleError = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    event.target.src = fallbackImage;
  };

  return (
    <img
      className={className}
      alt={alt}
      src={imageSrc}
      onError={handleError}
      width={width}
      height={height}
    />
  );
};

export default Image;
