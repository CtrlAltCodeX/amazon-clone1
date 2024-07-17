import React from "react";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  const categories = [
    "All",
    "Amazon Mini Tv",
    "Sell",
    "Best Sellers",
    "Today`s Deal",
    "Mobile",
    "Customer Service",
    "Eletronics",
    "Prime",
  ];

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: "ello",
        image: "asd",
        price: 10,
        rating: 10,
      },
    });
  };

  return (
    <div className="grid">
      <div className="grid p-5 bg-[#131921] grid-cols-[300px,auto,325px] text-white items-center">
        <div className="flex gap-5">
          <img src="/logo.png" width="100" />

          <div className="flex items-center text-left">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="text-xs">
              Delivering to Delhi 110018 <br />
              <b className="text-sm">Update the location</b>
            </p>
          </div>
        </div>

        <div className="flex">
          <button
            id="states-button"
            data-dropdown-toggle="dropdown-states"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          >
            All
          </button>

          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

          <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-dark dark:border-gray-600 rounded-se-lg rounded-ee-lg bg-[#febd69]">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-[50px,110px,70px,auto] text-left items-center gap-1.5">
          <div className="text-center">EN</div>

          <p className="text-xs">
            Hello, sign in <br />
            <b className="text-sm">Account & Lists</b>
          </p>

          <p className="text-xs">
            Return <br />
            <b className="text-sm">& Orders</b>
          </p>

          <div className="flex items-center relative" onClick={addToBasket}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p>Cart</p>
            <span className="inline-flex items-center bg-gray-50 p-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 bg-[#CC0C39] text-white rounded-lg absolute top-[-5px] right-[35px]">
              {basket?.length}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#232f3e] grid grid-cols-[auto,410px] items-center">
        <div className="flex gap-5 text-white p-3">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {categories.map((val) => {
            return <p>{val}</p>;
          })}
        </div>

        <img src="/app-download.jpg" />
      </div>
    </div>
  );
}

export default Header;
