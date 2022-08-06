import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-xl font-bold md:py-6">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Fast, Flexible, Financing for
          </p>
          <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "B2C", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your Data Analytics to increase your revenue in B2B, BTC <span className="text-[#00df9a] text-2xl"> (Not Bitcoin)</span> & SAAS Platforms</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium text-black my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[#00df9a]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
