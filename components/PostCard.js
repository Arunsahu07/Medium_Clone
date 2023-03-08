import React from "react";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiMinusCircle } from "react-icons/fi";
import bookmark from "../images/bookmark.png";
import profile from "../images/jsLogo.png";
import Link from "next/link";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
const PostCard = () => {
  const { users, posts, setSelectedPost } = useContext(MediumContext);
 
  return (
    <>
    { typeof(window)  != undefined ? 
    <div>
      {posts.map((post, _) => {
        return (
          <div
            key={post.id}
            className="cursor-pointer w-full flex flex-col justify-center items-center"
            id={post.id}
            onClick={() => {
              setSelectedPost(post);
            }}
            >
            <Link href={`/post/${post.id}`}>
              <div className="  md:flex justify-between items-center  mt-4 border-b pb-8 w-full bg-gray-100 px-5 max-w-[1500px]">
                <div className="w-full">
                  <div className="flex items-center  mt-3 ">
                    <img
                      className="rounded-full w-16 h-16 object-contain"
                      src={post.data.authorImage}
                      alt="profil"
                    />
                    <span className="pl-2  mt-2  font-semibold">
                      {post.data.author}
                    </span>
                  </div>
                  <div className="text-[1.5rem] font-extrabold ''3 ">
                    {post.data.title}
                  </div>
                  <div className="text-[#5b5b5b] text-xl mt-1 font-normal">
                    {post.data.body.slice(0, 140) + "..."}
                  </div>

                  <div className=" flex justify-between text-[#5b5b5b] text-xl font-normal ">
                    <div className="flex items-center justify-between w-full">
                      <div className=" mt-3">
                        <span className="rounded-full bg-gray-200 px-2 py-1 ">
                          {post.data.category}
                        </span>
                        <span> {new Date(post.data.postedOn?.seconds * 1000).toLocaleDateString()} · </span>
                        <span>{post.data.postLenght} read</span>
                      </div>
                    </div>
                    <button className="whitespace-nowrap text-white bg-[#288FFF] px-2 rounded-md">Read More</button>
                  </div>
                </div>
                <div className=" text-center  h-full w-full flex justify-center  items-center  ">
                  <img className="w-1/2 px-4  cover " src={post.data.bannerImage} alt="" />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      
    </div> : null
  }
    </>
  );
};
export default PostCard;
// export {ref}

