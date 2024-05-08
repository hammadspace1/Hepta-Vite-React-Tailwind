import React, { useState} from "react";
import { Outlet } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

const Home = () => {

    const slides = [
        "https://preview.colorlib.com/theme/hepta/images/slider-4.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-2.jpg"
    ]
    return (
        <div className="container w-full">
            <div>
                <img className="w-screen h-screen object-cover " src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg" alt="mainHeader" />
            </div>
            <div className=" flex flex-wrap justify-between py-[8rem] px-5 md:px-[14rem] box-border">
                <img className=" md:w-[35rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg" alt="home1stimage" />
                <div className="md:w-[30rem] mb-[100px]">
                    <h1 className="font-extrabold text-[20px] md:text-[28px] py-11 font-serif">Welcome To Our Website</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
            <div className="w-full border-t-2 border-slate-300"></div>
            <div className="container flex flex-col mt-11 md:mt-[5rem] items-center">
                <h1 className="font-extrabold text-[2rem] text-center md:text-[35px] py-11 font-serif">Experience Once In Your Life Time</h1>
                <p className="text-center px-5 md:px-[20rem]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="container flex flex-wrap justify-between md:px-[15rem] mt-[100px] items-center">
                <div className="w-[20rem] items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg" alt="firstof3" />
                    <h1 className=" text-black text-[2rem] font-extrabold font-serif my-4 ml-[5rem] md:ml-0 md:mx-12">Good Foods</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
                <div className="w-[20rem] py-4 md:py-0 items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg" alt="firstof3" />
                    <h1 className="text-black text-[2rem] font-extrabold font-serif my-4 ml-[2.4rem] md:ml-0 md:mx-3">Travel Anywhere</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
                <div className="w-[20rem] py-5 md:py-0 items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg" alt="firstof3" />
                    <h1 className="text-black text-[2rem] font-extrabold font-serif my-4 ml-[7rem] md:ml-0 md:mx-12">Airplane</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
            </div>
            <div className="container flex flex-wrap justify-between md:px-[15rem] mt-[100px] items-center">
                <div className="w-[20rem] items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg" alt="firstof3" />
                    <h1 className=" text-black text-[2rem] font-extrabold font-serif my-4 ml-[5rem] md:ml-0 md:mx-12">Good Foods</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
                <div className="w-[20rem] py-4 md:py-0 items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg" alt="firstof3" />
                    <h1 className="text-black text-[2rem] font-extrabold font-serif my-4 ml-[2.4rem] md:ml-0 md:mx-3">Travel Anywhere</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
                <div className="w-[20rem] py-5 md:py-0 items-center">
                    <img className="w-[5rem] h-[5rem] ml-[9rem] md:ml-[6.5rem] my-5 " src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg" alt="firstof3" />
                    <h1 className="text-black text-[2rem] font-extrabold font-serif my-4 ml-[7rem] md:ml-0 md:mx-12">Airplane</h1>
                    <p className="text-center pl-8 md:pl-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
            </div>
            <div className="w-full pt-[10rem] md:px-[20rem]">
                <h1 className="text-black text-[2.1rem] md:text-[4rem] font-serif font-extrabold text-center ">International Tour Management.</h1>
                <p className="font-serif text-[1.5rem] text-center px-5 md:px-0 py-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className=" max-w-5xl md:ml-[15rem] px-5 md:px-0">
                <HomeCarousel autoSlide={true}>
                    {slides.map((s) => (
                        <img src={s} />
                    ))}
                </HomeCarousel>
            </div>
            <div className="w-full bg-[#65C0BA]">
                <h1 className="text-black font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-center pt-[6rem] md:pt-[10rem]">Recent Blog Post</h1>
                <p className="text-center text-white font-serif px-5 pt-4 md:pt-0 md:px-[23rem]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className="flex flex-wrap justify-between px-6 md:px-[15rem] md:py-[5rem]">
                    <div className=" w-[20rem] flex-col mt-[5rem] md:mt-0 my-[1rem] md:my-0 bg-white">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="img1" />
                        <p className=" py-8 px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" py-1 px-5 text-[2rem] font-extrabold font-serif">45 Best Places To Unwind</h1>
                        <p className=" py-8 px-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className=" w-[20rem] flex-col my-[1rem] md:my-0  bg-white">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="img1" />
                        <p className=" py-8 px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" py-1 px-5 text-[2rem] font-extrabold font-serif">45 Best Places To Unwind</h1>
                        <p className=" py-8 px-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className=" w-[20rem] flex-col my-[1rem] md:my-0 bg-white">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="img1" />
                        <p className=" py-8 px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" py-1 px-5 text-[2rem] font-extrabold font-serif">45 Best Places To Unwind</h1>
                        <p className=" py-8 px-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>

                </div>
            </div>
            <div className="py-[5rem] bg-[#FAFAFA]">
                <h1 className="text-[3rem] md:text-[4rem] text-center font-serif font-extrabold">Happy Customers</h1>
                <div className="flex flex-wrap px-5 md:px-[15rem] justify-between py-[5rem]">
                    <div className="w-[20rem] flex-col">
                        <img className=" w-[5rem] rounded-full" src="https://preview.colorlib.com/theme/hepta/images/person_1.jpg" alt="" />
                        <p className="py-10 font-serif">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                        <p className="font-serif">— Clare Gupta</p>
                    </div>
                    <div className="w-[20rem] flex-col mt-11 md:mt-0">
                        <img className=" w-[5rem] rounded-full" src="https://preview.colorlib.com/theme/hepta/images/person_2.jpg" alt="" />
                        <p className="py-10 font-serif">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                        <p className="font-serif">— Clare Gupta</p>
                    </div>
                    <div className="w-[20rem] flex-col mt-11 md:mt-0">
                        <img className=" w-[5rem] rounded-full" src="https://preview.colorlib.com/theme/hepta/images/person_3.jpg" alt="" />
                        <p className="py-10 font-serif">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                        <p className="font-serif">— Clare Gupta</p>
                    </div>
                </div>
            </div >
            <div className="md:py-[2rem]">
                <h1 className="text-black font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-center pt-[6rem] md:pt-[10rem]">Top Destination</h1>
                <p className="text-center  font-serif px-5 pt-4 md:pt-0 md:px-[23rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
                <div className="flex flex-wrap justify-between py-[5rem] px-5 md:px-[15rem]">
                    <div className="md:w-[15rem] flex-col ">
                        <img className="" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="image2" />
                        <h1 className="text-[1.3rem] font-extrabold font-serif py-5">Food & Wines</h1>

                    </div>
                    <div className="md:w-[15rem] flex-col ">
                        <img className="" src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" alt="image2" />
                        <h1 className="text-[1.3rem] font-extrabold font-serif py-5">Food & Wines</h1>

                    </div>
                    <div className="md:w-[15rem] flex-col ">
                        <img className="" src="https://preview.colorlib.com/theme/hepta/images/img_4.jpg" alt="image2" />
                        <h1 className="text-[1.3rem] font-extrabold font-serif py-5">Food & Wines</h1>

                    </div>
                    <div className="md:w-[15rem] flex-col ">
                        <img className="" src="https://preview.colorlib.com/theme/hepta/images/img_5.jpg" alt="image2" />
                        <h1 className="text-[1.3rem] font-extrabold font-serif py-5">Food & Wines</h1>

                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default Home;
