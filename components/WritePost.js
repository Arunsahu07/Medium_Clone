import React, { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import {ImCross} from "react-icons/im"

const WritePost = () => {
  const { currUser, addPostToDatabase, setShowPostPage, isSubmitButtonClicked , setIsSubmitButtonClicked } = useContext(MediumContext);
  // const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false)

  console.log(
    "curruse",
    currUser,
    currUser?.user?.displayName,
    currUser?.user?.email,
    currUser?.user?.photoURL
  );

  const [post, setPost] = useState({
    author: currUser?.user?.displayName,
    email: currUser?.user?.email,
    authorImage: currUser?.user?.photoURL,
  });
  return (
    <div className="w-[100vw] h-[100vh] z-20  absolute left-0 top-0    backdrop-blur-sm   ">

    <div className=" md:w-[50vw] sm:w-[90vw] h-[80vh] mt-[5vh]  mx-auto      flex flex-col justify-around items-center   from-purple-500 to-blue-500 bg-gradient-to-br ">
      <ImCross className="absolute z-40     top-[8vh] text-2xl  md:right-[28vw]" onClick={()=>{
         setShowPostPage(false)
setIsSubmitButtonClicked(false)
      }}  />
     {isSubmitButtonClicked == false ? ( <div className="md:w-[50vw] sm:w-[90vw] h-[80vh] mt-[5vh]  mx-auto      flex flex-col justify-around items-center">
      <div className="text-center text-white text-[2rem]">Write Post</div>
      <div className="flex justify-around  w-full px-12 sm:flex-col  text-[1.5rem]  items-center   ">
        <label className="text-white">Topic</label>
        <input placeholder="Ex. reading, acting etc."
          className=" -2 rounded-full text-center  sm:px-4  md:px-8 py-2  "
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
      </div>
      <div className="flex sm:flex-col  justify-around  w-full px-12 text-[1.5rem]  items-center ">
        <label className="text-white">Image Link</label>
        <input placeholder="Ex. https://abc.com "
          className=" text-center rounded-full px-auto   sm:px-4  md:px-8 py-2 "
          onChange={(e) => {
            setPost({ ...post, bannerImage: e.target.value });
          }}
          type={"url"}
        />
      </div>
      <div className="flex justify-around  w-full px-12 text-[1.5rem] sm:flex-col  items-center  ">
        <label className="text-white">Write your Post  </label>
        <input
          className=" text-center rounded-full px-auto px-8  py-2"
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
        />
      </div>
      <div className="flex justify-around  w-full px-12 text-[1.5rem]  items-center  sm:flex-col">
        <label className="text-white" >Read Time</label>
        <input
          className=" text-center rounded-full  sm:px-4  md:px-8 py-2"
          placeholder="Ex.  3min"
          onChange={(e) => {
            setPost({ ...post, postlenght: e.target.value });
          }}
          type={"text"}
        />
      </div>
      <div className="flex sm:flex-col   items-center  justify-around  w-full px-12 text-[1.5rem] ">
        <label className="text-white">Category</label>
        <input placeholder="Ex. writing, reading etc."
          className="text-center  rounded-full px-8  text  ountline-none   sm:px-4  md:px-8 py-2"
          onChange={(e) => {
            setPost({ ...post, category: e.target.value });
          }}
          type={"text"}
          />
      </div>
      <div className="flex justify-around sm:flex-col  items-center     w-full px-12 text-[1.5rem]">
        <button
          className="  text-2xl  mt-8 text-white bg-[#20201e] inline-table rounded-full px-16 py-2"
          onClick={ ()=>{
            console.log("categorLenght",post.category?.length);
            if(post.category?.length > 0 && post.postlenght?.length > 0 && post.body?.length > 0 && post.bannerImage?.length > 0 && post.title?.length > 0 )
            {

              addPostToDatabase(post)
              localStorage.removeItem("posts")
              setIsSubmitButtonClicked(true)
            }
           
          }}
          >
          {" "}
          Post{" "}
        </button>
      </div>


      </div>) : <div className="text-4xl text-white">Please refresh the page to see your post !!!</div>}
      
    </div>
          </div>
  );
};

export default WritePost;
