import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Import images
import image1 from "../../assets/001.jpg";
import image2 from "../../assets/002.jpg";
import image3 from "../../assets/001.jpg";
import image4 from "../../assets/002.jpg";
import image5 from "../../assets/001.jpg";

const galleryImages = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 1000,  // Set speed of autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-6">Gallery</h2>
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
