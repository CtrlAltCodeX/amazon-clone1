import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryImageSlider = ({ images, noOfSlides }) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id} className="h-[200px]">
            <img
              src={item.src}
              alt={item.alt}
              className="cursor-pointer m-auto"
            />

            <div className="flex items-center gap-2 my-1">
              <span class="inline-flex items-center bg-gray-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 bg-[#CC0C39] text-white">
                Upto 25% off
              </span>
              <p className="text-xs">Deal of the Day</p>
            </div>
            <p className="text-xs">{item.productName}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CategoryImageSlider;
