import React from "react";

export default function ProductsOffers({ items }) {
  return (
    <>
      {items.map((val) => {
        return (
          <div className="w-full bg-white p-5 grid gap-3 ">
            <p className="text-xl font-bold text-left mb-2">{val.mainName}</p>

            <div className="grid grid-cols-2 gap-5 h-[327px]">
              {val.products.map((image) => {
                return (
                  <div className="grid">
                    <img src={image.src} className="m-auto w-full" />
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-left font-semibold mb-2 text-[#ccc]">
              See all deals
            </p>
          </div>
        );
      })}
    </>
  );
}
