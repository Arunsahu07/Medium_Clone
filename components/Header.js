import React from "react";
import Image from "next/image";
// import {logo} from "../images/logo.png";
import logo from "C:/Arun/medium-app/medium-app/images/header.png";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import WritePost from "./WritePost";
// import logo from "../images/author.jpg"
const Header = () => {
  const { handleUserAuth, currUser,setCurrUser, showPostPage,setShowPostPage  } = useContext(MediumContext);
  // // const  User = window.localStorage.getItem("user")
  // if(User){
  //   const User = JSON.parse(User)
  //   setCurrUser(User);
  //   console.log("local User",User)
  // }
  // console.log(
  //   "curruse",
  //   currUser,
  //   currUser?.user?.displayName,
  //   currUser?.user?.email,
  //   currUser?.user?.photoURL
  // );
  // const [showPostPage, setShowPostPage] = React.useState(false)
  // console.log("userauth",handleUserAuth);
  // let url =   "../images/author.jpg";
  // https://imgs.search.brave.com/x_mHaHeOzAP6m4AO4Y8CwLfTEJEOcsiQUtAu7GAoY50/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/cVNWRTdUVWNic0xD/UWRGX0ZQZlJnSGFF/SyZwaWQ9QXBp
  return (
    <div className="bg-[rgb(255,187,29)] px-24 py-4 flex-center flex  justify-between w-screen border-b-2 border-solid border-black ">
      {currUser?.user === undefined ? (
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
          <div className=" flex justify-center items-center  first-letter gap-8 ">
            <div className="cursor-pointer">Our story</div>
            <div className=" cursor-pointer">Membership</div>
            <div className="cursor-pointer" onClick={handleUserAuth}>
              Sign in
            </div>
            <div className="cursor-pointer bg-black text-white rounded-full px-4 py-2">
              Get Started
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between   w-full    ">
          <div className="logo-wrapper cursor-pointer  ">
            <Image
              className="border-6 h-32  object-contain "
              src={logo}
              alt="author"
              height={46}
              width={200}
            />
          </div>
          <div className=" flex justify-center items-center  first-letter gap-8 ">
            <div className="cursor-pointer">Our story</div>
            <div className=" cursor-pointer">Membership</div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowPostPage(true)
              }}
            >
              Write
            </div>
            <div className="cursor-pointer  text-white rounded-full px-4 py-2">
              <img src= {currUser?.user.photoURL} alt= "" className="rounded-full w-12 h-11" />
            </div>
          </div>
        </div>
      )}
      {showPostPage ? (<WritePost  />) : (undefined)}
    </div>
  );
};

export default Header;
