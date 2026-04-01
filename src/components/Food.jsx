import React from "react";

const Food = () => {
  return (
    // Filter-Type Burger/Pizza etc
    <div className="max-w-[1640px] mx-auto px-4 ">
      <h1 className="text-orange-600 font-bold text-center text-4xl">
        Top Rated Menu Item's
      </h1>

      {/* filter row */}
      <div>
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        {/* filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className="m-1 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
