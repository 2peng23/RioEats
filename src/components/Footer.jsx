import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1520px] bg-[#24262b] m-auto px-4 py-2 ">
      <div className="grid lg:grid-cols-3 gap-8 text-gray-300 py-16 -px-4">
        <div>
          <h1 className="w-full font-bold text-orange-700">Rio Eats</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, arcu eget dapibus facilisis, erat ex consectetur purus, eu
            dignissim dui libero in mauris. Sed vitae bibendum lorem. Proin
            vestibulum nulla ut sapien ultrices, a pharetra purus cursus.
            Suspendisse potenti. Nulla facilisi. In ullamcorper tincidunt purus,
            eget varius odio pellentesque id. Sed id quam quis libero viverra
            consequat. Donec in odio justo. Vivamus id sapien eu enim hendrerit
            pellentesque. In hac habitasse platea dictumst. Ut tempus semper
            ligula, id vulputate orci venenatis eu. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Cras vel
            leo in arcu iaculis lacinia.
          </p>
          <div className="flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGitSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm ">New York City</li>
              <li className="py-2 text-sm ">USA</li>
              <li className="py-2 text-sm ">Philippines</li>
              <li className="py-2 text-sm ">Italy</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm ">New York City</li>
              <li className="py-2 text-sm ">USA</li>
              <li className="py-2 text-sm ">Philippines</li>
              <li className="py-2 text-sm ">Italy</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm ">New York City</li>
              <li className="py-2 text-sm ">USA</li>
              <li className="py-2 text-sm ">Philippines</li>
              <li className="py-2 text-sm ">Italy</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm ">New York City</li>
              <li className="py-2 text-sm ">USA</li>
              <li className="py-2 text-sm ">Philippines</li>
              <li className="py-2 text-sm ">Italy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
