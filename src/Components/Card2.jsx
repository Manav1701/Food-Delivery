import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';


const Card2 = ({name,price,qty,image,id}) => {
    let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between '>
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[50%] h-full rounded-lg overflow-hidden'>
                <img src={image} alt="" className='object-cover '/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-2'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>

                <div className='w-[100px] h-[50px] bg-slate-500 flex justify-center items-center rounded-lg overflow-hidden shadow-lg border border-green-500'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-300 '>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-500 text-xl'>{qty}</span>
                     <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-300 '>+</button>
                </div>
            </div>
        </div>
        <div className=' flex flex-col gap-8 justify-start items-end'>
            <span className='text-green-500 font-semibold'>Rs {price}/-</span> 
            <RiDeleteBin5Fill className='w-[20px] h-[20px] text-red-500 cursor-pointer'onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2