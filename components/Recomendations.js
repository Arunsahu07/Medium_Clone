import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMailAddLine } from "react-icons/ri";
import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Recomendations = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log("config=",process.env ,BASE_URL);
  
  const { selectedPost, users, currUser } = useContext(MediumContext);
  // console.log("reconmmnentdindlsf ", selectedPost);
  return (
    <div className="border overflow-hidden lg:px-8    xl:pt-8  md:w-2/4 flex flex-col gap-12 justify-evenly   ">
      <button className="inline-block cursor-pointer text-[1.2rem]  bg-black text-white rounded-full py-2">
        Get Unlimited Access
      </button>
      <div className="flex    items-center text-[1.2rem]  rounded-full  py-2 border border-gray-200 border-solid">
        <AiOutlineSearch className="ml-4" />
        <input
          placeholder="search"
          className=" pl-3   text-[1.2rem]   outline-none  "
        />
      </div>
     {currUser.user ? (<div>
      <div className="flex flex-col ">
        <div>
          <img
          alt = ""
            className="object-cover rounded-full w-32 h-32"
            src={currUser?.user?.photoURL}
          
          />
        </div>
        <div className="text-xl mt-1  font-semibold">
          {currUser?.user?.displayName}
        </div>
        <div className="text-xl  text-gray-500">{0} Followers</div>
       
        <div className="mt-2">
          <button className="rounded-full text-[1.2rem] bg-green-600 text-white py-2 px-4  ">
            Follow
          </button>
          <button className="px-2 py-1 rounded-full ml-6  bg-green-600 box-border">
            <RiMailAddLine className="text-3xl text-white inline-block     " />
          </button>
        </div>
      </div>
     </div>) : (<div>
      Login to Post Articles
     </div>)}
      <div>


    



      </div>
    </div>
  );
};

export default Recomendations;
