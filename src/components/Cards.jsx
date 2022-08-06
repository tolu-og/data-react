import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem] bg-white"
          src={single} alt="single" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up tp 2TB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>

        <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent"
          src={double} alt="single" />
          <h2 className="text-2xl font-bold md:my-0 my- text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up tp 2TB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem] bg-white"
          src={triple} alt="single" />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up tp 2TB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
