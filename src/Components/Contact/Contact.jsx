import React, { useState} from "react";

const Contact = () => {
    return (
        <div className="container w-full">
            <div>
                <img className="w-screen h-screen object-cover " src="https://preview.colorlib.com/theme/hepta/images/hero_4.jpg" alt="mainHeader" />
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
            <div className="flex flex-wrap mt-11 justify-between pb-11 px-1 md:px-[15rem]">
                <div className="flex-col shadow md:w-[40rem] px-5 py-10 border-2 border-gray-200">
                    <div className="flex w-full justify-between pt-6">
                        <div>
                            <p>Name</p>
                            <input className="w-[10rem] md:w-[15rem] h-11 border-2 border-gray-300" type="text" />
                        </div>
                        <div>
                            <p>Phone</p>
                            <input className="w-[10rem] md:w-[15rem] h-11 border-2 border-gray-300" type="text" />
                        </div>
                    </div>
                    <div className="pt-5">
                        <p>Email</p>
                        <input className=" w-full h-11 border-2 border-gray-300" type="text" />
                    </div>
                    <div className="pt-5">
                        <p>Write Message</p>
                        <input className=" w-full min-h-[15rem] border-2 border-gray-300" type="text" />
                    </div>
                    <div className="pt-5">
                        <button className=" w-[10rem] min-h-11 border-2 border-blue-500">Send Message</button>
                    </div>
                </div>
                <div className="flex-col w-[15rem] px-5 md:px-0 md:w-[20rem]">
                    <h1 className="text-blue-600 ">ADDRESS:</h1>
                    <h1 className="font-serif font-extrabold text-[1.5rem] py-3">98 West 21th Street, Suite 721 New York NY 10016</h1>
                    <h1 className="text-blue-600 pt-6 ">PHONE:</h1>
                    <h1 className="font-serif font-extrabold text-[1.5rem] py-3">03189668328</h1>
                    <h1 className="text-blue-600 pt-6 ">EMAIL:</h1>
                    <h1 className="font-serif font-extrabold text-[1.5rem] py-3">hammadspace1@gmail.com</h1>
                </div>
            </div>

            
        </div>
    )
}

export default Contact;