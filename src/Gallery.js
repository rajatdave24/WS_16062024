import React from "react";
import { BiBorderBottom } from "react-icons/bi";
import ImageGallery from "react-image-gallery";
import './style.css';
import "react-image-gallery/styles/css/image-gallery.css";

const galleryStyle = {
  maxWidth: "800px", // Adjust the maximum width as needed
  margin: "auto", // Center-align the gallery horizontally
  textAlign:'center',
  paddingTop: '50px'
};

const border={
  display: 'inline-flex',
  textAlign: 'center',
  fontWeight: 'bold',
  color:'black',
  position: 'relative',
  fontSize:'35px',
  paddingTop:'50px',
  // borderBottom: '5px solid #60349e',
  borderBottom: '5px solid rgb(140, 27, 89)',
  marginBottom: '25px'
}

const image = {
  width: '100vw',
  height: '30vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '20px',
  margin: 'auto'
}

export const Gallery = () => {
  const images = [
    { 
      original: "./Images_final/slider1.jpg",
      thumbnail: "./Images_final/slider1.jpg"
    },
    {
      original: "./Images_final/slider2.jpg",
      thumbnail: "./Images_final/slider2.jpg"
    },
    {
      original: "./Images_final/slider3.jpg",
      thumbnail: "./Images_final/slider3.jpg"
    },
    {
      original: "./Images_final/slider4.jpg",
      thumbnail: "./Images_final/slider4.jpg"
    },
    {
      original: "./Images_final/slider5.jpg",
      thumbnail: "./Images_final/slider5.jpg"
    },
    {
      original: "./Images_final/slider6.jpg",
      thumbnail: "./Images_final/slider6.jpg"
    },
    {
        original: "./Images_final/slider7.jpg",
        thumbnail: "./Images_final/slider7.jpg"
    },
    {
        original: "./Images_final/slider8.jpg",
        thumbnail: "./Images_final/slider8.jpg"
    }
  ];

  return (
    <div id="portfolio" style={galleryStyle}>
      <h1 style={border}>Gallery</h1>
      <br />
      <br />
      <ImageGallery
        items={images}
        additionalClass={image}
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

export default Gallery;