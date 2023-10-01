import React from "react";

function New() {
  return (
    <div className="max-w=[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="grid mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign Up to join our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              placeholder="Email"
              type="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="rounded-lg font-medium w-[200px] ml-4 my-6 py-3 px-6 border-black bg-blue-400 hover:bg-blue-600 text-white">
              Notify Me
            </button>
          </div>
          <p>
            We are concerned about the security of our data, Read {""}
            <span className="text-blue-400">Privacy Policy</span>
          </p>
        </div>
        <div className="bg-gray-300 w-[80%] mx-auto my-8 border-white  h-[3px]  lg:hidden"></div>
      </div>
    </div>
  );
}

export default New;
