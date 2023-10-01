import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillTag,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";

function TopNav({ logo }) {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            size={30}
            onClick={() => {
              setSideNav(!sideNav);
            }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-orange-700">
          {logo}
          <span className="font-bold text-black">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className=" bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full px-5">
        <BsFillCartFill />
        Cart
      </button>

      <div
        className={
          "bg-black/60 fixed w-full h-screen z-10 top-0 left-0 " +
          (sideNav ? "block" : "hidden")
        }
        onClick={() => {
          setSideNav(!sideNav);
        }}
      ></div>
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white"
        }
      >
        <AiFillCloseCircle
          className="absolute right-4 top-4"
          size={30}
          onClick={() => {
            setSideNav(!sideNav);
          }}
        />
        <h2 className="text-2xl p-4 text-orange-700">
          {logo}
          <span className="text-black font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={30}
                className="mr-4 text-white bg-orange-600 rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn
                size={30}
                className="mr-4 text-white bg-orange-600 rounded-full"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite
                size={30}
                className="mr-4 text-white bg-orange-600 rounded-full"
              />
              Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet
                size={30}
                className="mr-4 text-white bg-orange-600 rounded-full"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <BiHelpCircle
                size={30}
                className="mr-4 text-white bg-orange-600 rounded-full"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopNav;
