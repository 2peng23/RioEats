import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

function TopItems({ title }) {
  return (
    <>
      <h1 className="hidden lg:block md:block  text-orange-500 font-bold text-2xl text-center py-2">
        {title}
      </h1>
      <div className="hidden lg:flex md:flex max-w-[1520px] m-auto p-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", drag: "free", arrows: false }}
        >
          {topPicks.map((topPick) => {
            return (
              <SplideSlide key={topPick.id}>
                <div className="rounded-3xl relative ">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-3 pt-2 font-bold text-2xl">
                      {topPick.title}
                    </p>
                    <p className="px-3">{topPick.price}</p>
                    <button className="rounded-full border border-black bg-orange-500 px-3 py-2 mx-2 absolute bottom-4">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={topPick.img}
                    alt=""
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default TopItems;
