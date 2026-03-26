import React from 'react';
import dollarImg from '../../assets/dollar 1.png'

const Navbar = ( {coin}) => {
    return (
        <div className='max-w-[1150px] mx-auto '>
            <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className=" ">
          <button className=" flex justify-between items-center font-bold text-xl gap-2 container mx-auto">
           {coin} coins
          <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
        </div>
    );
};

export default Navbar;