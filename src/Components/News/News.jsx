import React, { useState} from "react";
import HomeCarousel from "../Home/HomeCarousel";

const News = () => {
    return (
        <div className="container w-full">
            <div>
                <img className="w-screen h-screen object-cover " src="https://preview.colorlib.com/theme/hepta/images/img_3.jpg" alt="mainHeader" />
            </div>
            <div className="flex flex-wrap px-5 bg-[#FAFAFA] justify-between md:px-[15rem] pt-[5rem]">
                <div className="flex-col w-[20rem] ">
                    <div className="flex-col w-[20rem] bg-white">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>
                    <div className="flex-col w-[20rem] bg-white pt-10">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>
                    <div className="flex-col w-[20rem] bg-white pt-10">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>

                </div>
                <div className="flex-col w-[20rem] ">
                    <div className="flex-col w-[20rem] bg-white">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>
                    <div className="flex-col w-[20rem] bg-white pt-10">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>
                    <div className="flex-col w-[20rem] bg-white pt-10">
                        <img src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" alt="1" />
                        <p className=" font-extralight px-5">FEBRUARY 26, 2018</p>
                        <h1 className=" font-serif font-extrabold text-[2rem] px-5">Free Template by Colorlib</h1>
                    </div>

                </div>
                <div className="flex-col w-[20rem] ">
                    <div className="flex-col w-[20rem] bg-white px-5 pt-9 md:pt-0">
                        <input className=" border-2 p-3 w-full" placeholder="Search" type="text" />
                    </div>
                    <div className="flex-col w-[20rem] px-5 bg-white mt-10 pt-9 border-2 border-gray-100">
                        <h1 className="font-bold">Populer Posts</h1>
                        <div className="flex pt-8 ">
                            <img className="w-[7rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="" />
                            <div className="flex-col pl-5">
                                <p className=" font-extralight">February 2018</p>
                                <h1 className="font-serif font-extrabold">Free Templete</h1>
                            </div>
                        </div>
                        <div className="flex pt-8 ">
                            <img className="w-[7rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="" />
                            <div className="flex-col pl-5">
                                <p className=" font-extralight">February 2018</p>
                                <h1 className="font-serif font-extrabold">Free Templete</h1>
                            </div>
                        </div>
                        <div className="flex pt-8 ">
                            <img className="w-[7rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="" />
                            <div className="flex-col pl-5">
                                <p className=" font-extralight">February 2018</p>
                                <h1 className="font-serif font-extrabold">Free Templete</h1>
                            </div>
                        </div>
                        <div className="flex pt-8 ">
                            <img className="w-[7rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="" />
                            <div className="flex-col pl-5">
                                <p className=" font-extralight">February 2018</p>
                                <h1 className="font-serif font-extrabold">Free Templete</h1>
                            </div>
                        </div>
                        <div className="flex pt-8 ">
                            <img className="w-[7rem]" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" alt="" />
                            <div className="flex-col pl-5">
                                <p className=" font-extralight">February 2018</p>
                                <h1 className="font-serif font-extrabold">Free Templete</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col w-[20rem] bg-white pt-10">
                        <div className="flex px-5 justify-between">
                        <h1 className=" font-serif font-extrabold text-[1rem] px-5">Categories</h1>
                        </div>
                        <div className="flex px-5 justify-between">
                        <h1 className=" font-serif font-extralight pt-5 text-[1rem] px-5">Events</h1>
                        <p>(12)</p>
                        </div>
                        <div className="flex px-5 justify-between">
                        <h1 className=" font-serif font-extralight pt-5 text-[1rem] px-5">RestoBars</h1>
                        <p>(12)</p>
                        </div>
                        <div className="flex px-5 justify-between">
                        <h1 className=" font-serif font-extralight pt-5 text-[1rem] px-5">Celebrations</h1>
                        <p>(12)</p>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default News;