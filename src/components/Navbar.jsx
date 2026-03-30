import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiFillTag , AiOutlineClose} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';


const Navbar = () => {

  const[nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side  */}
      <div className="flex items-center justify-between">
        <div onClick={()=>setNav(!nav)} 
        className='cursor-pointer'>
          <AiOutlineMenu size={30} 
          
          />
        </div>

        <p className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eat</span>
        </p>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full text-[14px] p-1">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input  */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {/* cart button  */}
      <button className="bg-black text-white hidden md:flex items-center rounded-full px-5 py-2">
        <BsFillCartFill  size={20} className="mr-2"/>
          Cart.
      </button>

     {/*mobile menu  */}
      {/* overlay */}
      { nav ? <div className='bg-black/80 fixed w-full h-screen left-0 top-0 z-10'>
      </div> : ""}
      

      {/* slidebar */}
      {/* <div className="fixed top-0 left-0 w-[300px] h-screen bg-white duration-300 z-10">
      </div> */}
      
      <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white duration-300 z-10': "fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300 z-10"}>
       
       <AiOutlineClose onClick={()=>setNav(!nav)} size={30} 
        className="absolute right-4 top-4 cursor-pointer"
        />
       
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'> Eats </span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex items-center'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
            <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='text-xl py-4 flex items-center'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Help</li>
            <li className='text-xl py-4 flex items-center'><AiFillTag size={25} className='mr-4' /> Promotions</li>
            <li className='text-xl py-4 flex items-center'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
            <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
          </ul>
        </nav>
      </div>



    </div>
  );
};

export default Navbar;
