/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";
import "./ImageGallery.css";
const Image = ({ src, onRemove }) => {
  return (
    <div className="image-container">
      <img src={src} className="image" />
      <button className="remove" onClick={onRemove}>
        X
      </button>
    </div>
  );
};

export const ImageGallery = ({ links }) => {
  const [images, setImages] = useState(links);

  const handleOnRemove = (index) => {
    const currentLinks = [...images];
    currentLinks.splice(index, 1);
    setImages(currentLinks);
  };

  return (
    <div>
      {images.map((src, index) => {
        return (
          <Image
            src={src}
            onRemove={() => {
              handleOnRemove(index);
            }}
            key={index}
          />
        );
      })}
      {/* Implement here the Image Gallery using <Image /> component */}
    </div>
  );
};
