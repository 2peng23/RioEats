import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Featured() {
  const sliders = [
    {
      url: "https://i.pinimg.com/564x/26/3a/6e/263a6eb044289b51933c6c2459041f10.jpg",
    },
    {
      url: "https://i.pinimg.com/564x/a8/e1/6f/a8e16fcc103e0723dfc80bceef084d2a.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/95/54/38/95543815b0002e6da1c9c044f0154a0d.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${sliders[currentIndex].url})`,
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative group">
      <div
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
        style={backgroundImageStyle}
      ></div>
      <div>
        <BsChevronCompactLeft
          size={50}
          className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"
          onClick={handlePrevClick}
        />
      </div>
      <div>
        <BsChevronCompactRight
          size={50}
          className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"
          onClick={handleNextClick}
        />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={
              currentIndex == index
                ? "text-3xl text-orange-500 font-bold cursor-pointer"
                : "text-3xl cursor-pointer"
            }
          >
            <RxDotFilled
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
