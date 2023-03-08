import React, { useState } from "react";
import Image from "next/image";
// import {logo} from "../images/logo.png";
import logo from "../images/header.png";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import WritePost from "./WritePost";
// import logo from "../images/author.jpg"
const Header = () => {
  const { handleUserAuth, currUser,setCurrUser, showPostPage,setShowPostPage  } = useContext(MediumContext);
  useState(()=>{
    if(typeof window == 'object' && window.localStorage.getItem("user"))
    {
      let userr = window.localStorage.getItem("user")
      setCurrUser(JSON.parse(userr))
      return  
    }
  },[])
  return (
    <div className="bg-[rgb(255,187,29)] px-5 lg:px-24 py-4 flex-center flex  justify-between w-screen border-b-2 border-solid border-black ">
        <div className="flex justify-between w-full">
          <div className="logo-wrapper cursor-pointer  ">
            <Image
              className="border-6 h-32  object-contain "
              src={logo}
              alt="author"
              height={46}
              width={200}
            />
          </div>
          <div className="cursor-pointer  text-white rounded-full px-4 py-2">
              <img src= {currUser?.user?.photoURL} alt= "" className="rounded-full w-12 h-11" />
            </div>
        </div>
      
      {showPostPage ? (<WritePost  />) : (undefined)}
    </div>
  );
};

export default Header;
