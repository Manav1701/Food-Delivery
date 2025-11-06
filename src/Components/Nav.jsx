import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[50px] bg-white h-[50px] flex justify-center items-center rounded-md shadow-2xl">
        <MdFastfood className="w-[25px] h-[25px] text-green-500"/>
      </div>

      <form className="bg-white w-[50%] h-[45px] flex items-center px-4 gap-4 shadow-md rounded-md md:w-[80%]">
        <IoSearch className="text-green-500 w-[20px] h-[20px]"/>
        <input type="text" placeholder="Search Your Dish..." className="w-[100%] text-[13px] md:text-[15px] outline-none "/>
      </form>

      <div className="w-[50px] h-[50px] flex justify-center  items-center bg-white rounded-md shadow-2xl relative">
        <span className="text-green-500 absolute top-0 right-1.5 font-bold text-[17px]">0</span>
        <LuShoppingBag className="w-[25px] h-[25px] text-green-500"/>
      </div>
    </div>
  );
};

export default Nav;
