import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleryStyle = {
  maxWidth: "800px", // Adjust the maximum width as needed
  margin: "auto", // Center-align the gallery horizontally
};

export const Gallery = () => {
  const images = [
    { 
      original: "pic1.jpg",
      thumbnail: "pic1.jpg"
    },
    {
      original: "pic2.jpg",
      thumbnail: "pic2.jpg"
    },
    {
      original: "pic3.jpg",
      thumbnail: "pic3.jpg"
    },
    {
      original: "pic4.jpg",
      thumbnail: "pic4.jpg"
    },
    {
      original: "pic5.jpg",
      thumbnail: "pic5.jpg"
    },
    {
      original: "pic6.jpg",
      thumbnail: "pic6.jpg"
    }
  ];

  return (
    <div id="portfolio" style={galleryStyle}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: "black" }}>Gallery</h1>
      <br />
      <br />
      <ImageGallery
        items={images}
        showPlayButton={true}
        autoPlay={true}
        slideDuration={1000}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          // Your play function logic here
        }}
      />
    </div>
  );
};
