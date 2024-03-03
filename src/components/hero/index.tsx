import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";

const index = () => {
  return (
    <section className="bg-gradient-to-t to-[#f3c073] from-[#d29135] rounded-3xl mx-10">
      <div className="container mx-auto flex flex-col justify-center p-6  lg:flex-row lg:justify-between">
        <div className="  flex justify-items-center items-center">
          <div className="px-4 py-4 rounded-full bg-[#95631d]">
            <ChevronLeft className="!text-3xl" />
          </div>
        </div>
        <div className="mx-auto max-w-5xl  flex flex-col justify-center lg:flex-row lg:justify-between ">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" font-bold text-6xl text-[#553507]">
              For You Deals
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12 text-[#95631d]">
              Get Up to 50% cashback all <br /> Paytm
            </p>
            <div className="flex justify-items-center items-center gap-4">
              <span className="h-7 w-7 bg-[#9c6519] rounded-full"></span>
              <span className="h-5 w-5 bg-[#382203] rounded-full"></span>
              <span className="h-5 w-5 bg-[#382203] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center justify-start ">
            <img
              src="/baner.jpg"
              alt=""
              className="object-cover rounded-full w-96 h-96"
            />
          </div>
        </div>
        <div className="  flex justify-items-center items-center">
          <div className="px-4 py-4 rounded-full bg-[#95631d]">
            <ChevronRight className="!text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
