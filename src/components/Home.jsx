import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="mx-auto w-full max-w-7xl p-3">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Book your Appointment
                            <span className=" sm:block text-4xl"><br className="lg:hidden" />with <b>ApnaTime</b></span>
                        </h2>

                        <Link
                            className="inline-flex bg-[#63b91c] hover:bg-[#63b91c90] text-white items-center px-6 py-3 font-medium rounded-lg"
                            to="/shops-listing"
                        >
                            <IoMdCheckmarkCircleOutline />
                            &nbsp; Book Appointment
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 relative z-[-2]" src="/apoint.png" alt="image1" />
                </div>
            </aside>
        </div>
    );
}