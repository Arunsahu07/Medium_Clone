import React from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import {IoLogoTwitter} from "react-icons/io"
import {FaFacebook} from "react-icons/fa"
import {HiOutlineLink} from "react-icons/hi"
import {BiBookmark} from "react-icons/bi"
import {GrLinkedin} from "react-icons/gr"
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import WritePost from "./WritePost";

const MainPost = () => {
  const {selectedPost,addPostToDatabase} = useContext(MediumContext)
  // addPostToDatabase("newPost");
  return (
    <div className="md:px-56  md:pt-16 p-4 md:w-full     ">
    {selectedPost.id ?  <div>
      <div className="gap-7  flex items-center">
        <div>
          <img  
            className="rounded-full w-16 h-16"
            src={selectedPost.data.authorImage}
            atl="profilePic"
         
          />
        </div>
        <div>

        <div className="flex gap-5">
          <div className="font-bold">{selectedPost.data.author}</div>
          <div>
            <button className="rounded-full px-2  bg-green-500 text-white ">
              Follow
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          <span>jul 12 · </span>
          <span>{selectedPost.data.postLenght} ·</span>
          <span className="text-green-500 flex items-center ">
            <AiFillPlayCircle className="rounded-full  text-[1.5rem] text-green-500 bg-white" />
            Listen
          </span>
        </div>
        </div>


      </div>
      <div>
        <h6 className="text-[1.7rem] p-4 font-bold ">{selectedPost.data.title}</h6>
        <img src={selectedPost.data.bannerImage } className=" w-full  mx-auto"   alt="Post Image"  />
      </div>
      <p className="text-[1.5rem]  py-4 ">{selectedPost.data.body}</p>
    </div> : <div></div> }
    {/* <WritePost /> */}
    </div>
  );
};

export default MainPost;
