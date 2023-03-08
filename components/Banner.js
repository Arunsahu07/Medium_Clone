import React from "react";
import Image from "next/image";
import banner from "../images/banner.png";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
const Banner = () => {
  const { currUser, showPostPage, handleUserAuth, setShowPostPage } = useContext(MediumContext);
  return (
    <div className="flex bg-[rgb(255,187,29)] text-center lg:text-left px-5">
      <div className="xl:px-20  pt-20 w-screen  bg-[rgb(255,187,29)] ">
        <h1 className="text-[6rem]  ">Stay curious.</h1>
        <div className="text-3xl py-6">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>
        <button className="whitespace-nowrap text-white bg-[#288FFF] px-4 py-2 rounded-md text-3xl" onClick={()=>{currUser?.user ? setShowPostPage(true) : handleUserAuth()}}>{currUser?.user ? "Write" : "Login"}</button>
      </div>
      <div className="hidden lg:block">
        <Image className="object-contain   bg-[rgb(255,187,29)]" src={banner} alt="banner"  />
      </div>
    </div>
  );
};

export default Banner;  
