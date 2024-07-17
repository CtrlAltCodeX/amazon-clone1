import React from "react";
import ImageSlider from "./ImageSlider";
import ProductsOffers from "./ProductsOffers";
import CategoryImageSlider from "./CategoryImageSlider";

export default function Section() {
    
  const bannerImage = [
    {
      src: "/banner-imgs/1.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/2.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/3.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/4.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/1.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/2.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/3.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/banner-imgs/4.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
  ];

  const image = [
    {
      src: "/products-imgs/iphone.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/weight_gainer.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/charger.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/chaptti.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/bag.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/shirt.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/gainer.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
    {
      src: "/products-imgs/helmet.jpg",
      alt: "banner",
      productName: "Great Deals on Health and Sports Sup..",
    },
  ];

  const productsCards = [
    {
      mainName: "Deals inspired by your recent history",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "4+ star deals for you",
      products: [
        {
          src: "/products-imgs/rating1.jpg",
        },
        {
          src: "/products-imgs/rating2.jpg",
        },
        {
          src: "/products-imgs/rating3.jpg",
        },
        {
          src: "/products-imgs/rating4.jpg",
        },
      ],
    },
    {
      mainName: "Up to 75% off | Headphones",
      products: [
        {
          src: "/products-imgs/off1.jpg",
        },
        {
          src: "/products-imgs/off2.jpg",
        },
        {
          src: "/products-imgs/off3.jpg",
        },
        {
          src: "/products-imgs/off4.jpg",
        },
      ],
    },
    {
      mainName: "Revamp your home in style",
      products: [
        {
          src: "/products-imgs/pic1.jpg",
        },
        {
          src: "/products-imgs/pic2.jpg",
        },
        {
          src: "/products-imgs/pic3.jpg",
        },
        {
          src: "/products-imgs/pic4.jpg",
        },
      ],
    },
    {
      mainName: "Deals inspired by your recent history",
      products: [
        {
          src: "/products-imgs/pic5.jpg",
        },
        {
          src: "/products-imgs/pic6.jpg",
        },
        {
          src: "/products-imgs/pic7.jpg",
        },
        {
          src: "/products-imgs/pic8.jpg",
        },
      ],
    },
    {
      mainName: "4+ star deals for you",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "Up to 75% off | Headphones",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "Revamp your home in style",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <ImageSlider images={bannerImage} noOfSlides={1} />

        <div>
          <div className="grid grid-cols-4 p-5 relative gap-5">
            <ProductsOffers items={productsCards} />
          </div>

          <div className="p-5">
            <div className="bg-white imgslider w-full text-left p-5">
              <label className="font-bold text-[21px]">Today`s Deal</label>
              <CategoryImageSlider images={image} noOfSlides={6} />
            </div>
          </div>

          <div className="p-5">
            <div className="bg-white imgslider w-full text-left p-5">
              <label className="font-bold text-[21px]">
                Kitchen & dining products
              </label>
              <CategoryImageSlider images={image} noOfSlides={6} />
            </div>
          </div>

          <div className="p-5">
            <div className="bg-white imgslider w-full text-left p-5">
              <label className="font-bold text-[21px]">
                Related to items you've viewed
              </label>
              <CategoryImageSlider images={image} noOfSlides={6} />
            </div>
          </div>

          <div className="grid grid-cols-4 p-5 gap-5">
            <ProductsOffers items={productsCards} />
          </div>
        </div>
      </div>
    </div>
  );
}
