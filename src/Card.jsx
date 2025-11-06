import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";



const Card = ({name,image,type,price}) =>{
    return(
        <div className='w-[280px] h-[350px]  p-3 bg-white rounded-lg shadow-md flex flex-col gap-3 hover:border-2 border-green-300 transition-transform'>
          <div className="w-full  rounded-lg ">
           <img src={image} alt="" className='object-cover w-full h-[180px] rounded-lg'/>
          </div>

          <div className='font-bold text-xl'>{name}</div>

          <div className='w-full items-center text-green-500 flex justify-between'>
            <div className='font-bold text-lg'>Rs {price}</div>
            <div className='flex gap-1 justify-center items-center font-semibold'>{type=="veg"?<LuLeafyGreen />:<GiChickenOven />
}{type}</div>
          </div>
         <button className='cursor-pointer w-full p-3 font-semibold text-white rounded-lg bg-green-500 hover:bg-green-400 transition-all'>Add To dish</button>
        </div>
    )
}

export default Card;