import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className="bg-[#1A1A1A] text-white">
            <div className="flex flex-wrap justify-between px-5 md:px-[15rem] py-[5rem]">
                <div className="flex-col w-[16rem] ">
                    <a href="#" className="block  mt-[1.5rem] font-extralight "><h1 className="text-white text-[1.2rem] font-serif font-extrabold">Quick Link</h1></a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight " >About Us</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Terms & Conditions</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Privacy Policy</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Help</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Rooms</a>
                </div>
                <div className="flex-col w-[16rem] mt-8 md:mt-0 ">
                    <a href="#" className="block  mt-[1.5rem] font-extralight "><h1 className="text-white text-[1.2rem] font-serif font-extrabold">Support</h1></a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight " >Our Location</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">The Hosts</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">About</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Contact</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Restaurant</a>
                </div>
                <div className="flex-col w-[16rem] mt-8 md:mt-0 ">
                    <a href="#" className="block  mt-[1.5rem] "><h1 className="text-white text-[1.2rem] font-serif font-extrabold">Contact Info</h1></a>
                    <a href="#" className="block  mt-[1.5rem] font-serif  font-extrabold " >Address:</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">98 West 21th Street, Suite 721 New York NY 10016</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Privacy Policy</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Help</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Rooms</a>
                </div>
                <div className="flex-col w-[16rem] mt-8 md:mt-0 ">
                    <a href="#" className="block  mt-[1.5rem] font-extralight "><h1 className="text-white text-[1.2rem] font-serif font-extrabold">Quick Link</h1></a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight " >About Us</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Terms & Conditions</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Privacy Policy</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Help</a>
                    <a href="#" className="block  mt-[1.5rem] font-extralight ">Rooms</a>
                </div>
            </div>
            <div className="w-full border-t-2 border-white pb-10"></div>
            <div>
                <h1 className="text-white font-serif font-extralight text-center py-5">Copyright © 2024 All rights reserved</h1>
                <div className="flex text-white text-[1.5rem] justify-between px-[5.5rem] md:px-[42rem] ">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
        </div>
    )
}

export default Footer;