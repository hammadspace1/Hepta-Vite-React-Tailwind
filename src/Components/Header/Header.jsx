import React, { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {

    const [open, setOpen] = useState(false);
    const location = useLocation();
    return(
        <div className=''>
            <div className={`w-full flex justify-between px-6 absolute top-[55px] left-0 font-serif text-gray-500 shadow-black z-50 `}>
                <Link><h1 className=" text-[35px] font-extrabold ">Hepta</h1></Link>
                <div className='text-[50px] hover:text-gray-600 cursor-pointer ' onClick={()=>setOpen(!open)}>
                    <ion-icon  name={`${open ? 'close' : 'menu'}`}></ion-icon>
                    
                </div>
                {location.pathname === '/' && !open && <span className="absolute top-[9rem] left-6 md:left-[34rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">Travels & Tours</span> }
                {location.pathname === '/hotels' && !open && <span className="absolute top-[9rem] left-[7.5rem] md:left-[43rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">Hotels</span> }
                {location.pathname === '/aboutUs' && !open && <span className="absolute top-[9rem] left-[6.5rem] md:left-[39rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">About Us</span> }
                {location.pathname === '/gallery' && !open && <span className="absolute top-[9rem] left-[6.8rem] md:left-[43rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">Gallery</span> }
                {location.pathname === '/news' && !open && <span className="absolute top-[9rem] left-[8rem] md:left-[43rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">Blog</span> }
                {location.pathname === '/contact' && !open && <span className="absolute top-[9rem] left-[6.8rem] md:left-[43rem] text-[40px] md:text-[50px] font-extrabold font-serif text-gray-500">contact</span> }
            </div>
            <ul className={`bg-white absolute w-full h-screen px-[40%] md:px-[45%] py-[10%]  ${open ? "top-0 left-0  " : "left-[-100%]"}`}>
                <li className={location.pathname === '/' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif mt-[80px] md:mt-1 ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif mt-[80px] md:mt-1 hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/">Home</Link></li>
                <li className={location.pathname === '/hotels' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/hotels">Hotels</Link></li>
                <li className={location.pathname === '/aboutUs' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/aboutUs">AboutUs</Link></li>
                <li className={location.pathname === '/gallery' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/gallery">Gallery</Link></li>
                <li className={location.pathname === '/news' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/news">News</Link></li>
                <li className={location.pathname === '/contact' ? 'text-[#65C0BA] text-[30px] md:text-[40px] font-bold  py-3 font-serif ': 'text-gray-900 text-[30px] md:text-[40px] font-bold  py-3 font-serif hover:text-[#65C0BA]'}><Link onClick={()=>setOpen(!open)} to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;