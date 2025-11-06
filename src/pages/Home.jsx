import React, { useState } from "react";
import Nav from '../Components/Nav.jsx';
import Categories from "../Category.jsx";
import Card from "../Card.jsx";
import food_items from "../food.js";


const Home = () =>{
    let [cate,setCate] = useState(food_items)
    const filter = (category) =>{
        if(category==="All"){
            setCate(food_items)
        }
        else{
            let newList = food_items.filter((item)=>(item.food_category===category))
            setCate(newList);
        }
    }
    return(
        <div className="w-full bg-slate-200 min-h-screen">
         <Nav/>
         <div className="flex w-full justify-center flex-wrap gap-5">
            {Categories.map((items)=>(
                <div key={items.id} className="w-[100px] h-[100px] hover:bg-green-200 transition-all duration-200 cursor-pointer  bg-white flex flex-col justify-center items-center gap-3 font-bold rounded-lg shadow-md text-[14px] text-gray-600 "
                onClick={()=>filter(items.name)}>
                  {items.icon}  
                  {items.name}
                </div>
            ))}
         </div>
         <div className="flex gap-5 w-full flex-wrap px-5 pt-8 pb-5 justify-center">
            {cate.map((items,index)=>(
              <div key={index}>
                <Card name={items.food_name} id={items.id} price={items.price} image={items.food_image} type={items.food_type}/>
              </div>  
            ))}
         </div>
        </div>
    )
}

export default Home;