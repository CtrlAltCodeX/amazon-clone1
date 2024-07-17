import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, noOfSlides }) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="imgslider w-full">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={item.alt}
                className="m-auto cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
