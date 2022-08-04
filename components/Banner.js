import React from "react";
import Image from "next/image";
import banner from "../images/banner.png";
const Banner = () => {

  


  return (
    <div className="flex bg-[rgb(255,187,29)] ">
      <div className="xl:px-20  pt-20 w-screen  bg-[rgb(255,187,29)] ">
        <h1 className="text-[6rem]  ">Stay curious.</h1>
        <div className="text-3xl py-6">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>
        <button   
      
        
        
        className="mt-10  text-2xl  text-white bg-black rounded-full px-16 py-2" >
          Start reading
        </button>
      </div>
      <div>
        <Image className="object-contain bg-[rgb(255,187,29)]" src={banner} alt="banner"  />
      </div>
    </div>
  );
};

export default Banner;  
