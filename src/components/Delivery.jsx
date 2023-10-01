import React from "react";

function Delivery({ title }) {
  return (
    <div className="max-w-[1520px] bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        {title}
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience On-demand
          </h1>
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
          <button className="rounded-full border text-white border-black bg-black/80 hover:bg-black hover:text-green-500 w-[200px] font-medium my-6 mx-auto md:mx-0 py-3">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
