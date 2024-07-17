import { useState } from "react";

function ProductPage() {
  var [qty, setQty] = useState(1);

  const changeQty = (action) => {
    var getQty = document.getElementById("qty");
    if (action == "plus") {
      qty = getQty.value++;
    } else if (action == "minus") {
      qty = getQty.value--;
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 gap-5 py-10 flex flex-col md:px-20">
      <div className="grid gap-4">
        <div className="rounded-xl bg-[#f8f8f8] flex items-center p-5">
          <img src="shoes2.png" className="cursor-pointer" />
        </div>

        <div className="grid gap-4 grid-cols-[auto,auto,auto,auto] md:grid-cols-6  h-min">
          <div className="w-20 h-20 rounded-xl flex items-center border p-3.5 hover:border-sky-600 cursor-pointer">
            <img src="shoe1.jpg" width="100" />
          </div>
          <div className="w-20 h-20 rounded-xl flex items-center border p-3.5 hover:border-sky-600 cursor-pointer">
            <img src="shoe2.jpg" width="100" />
          </div>
          <div className="w-20 h-20 rounded-xl flex items-center border p-3.5 hover:border-sky-600 cursor-pointer">
            <img src="shoe3.jpg" width="100" />
          </div>
          <div className="w-20 h-20 rounded-xl flex items-center border p-3.5 hover:border-sky-600 cursor-pointer">
            <img src="shoes.jpg" width="100" />
          </div>
        </div>
      </div>

      <div className="text-left md:px-16 gap-5 grid">
        <p>Sneaker Company</p>
        <h1 className="text-5xl	">Fall Limited Editon Sneaker</h1>

        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>

        <div>
          <b className="text-5xl flex items-center gap-2.5">
            $100
            <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              50%
            </span>
          </b>
          <p className="line-through text-3xl text-[#ccc]">$200</p>
        </div>

        <div className="gap-5 flex items-center">
          <div className="flex bg-[#eee] rounded-xl w-52 py-4 justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => changeQty("minus")}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>

            <input
              className="w-10 bg-[#eee] text-base text-center"
              readOnly
              value={qty}
              id="qty"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => changeQty("plus")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>

          <button className="p-4 bg-orange-500 text-white rounded-xl w-full flex justify-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
