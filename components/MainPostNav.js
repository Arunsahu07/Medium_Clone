import React from "react";
import smallLogo from "../images/smallLogo.png"
import Image from "next/image";
import Link from "next/link"
// import Link from "next/link";
import { HiOutlineHome} from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
// import WritePost from "./WritePost";
const MainPostNav = () => {
  const {currUser} = useContext(MediumContext)
  return (
    <div className="h-[3rem] border   md:h-[100vh]  border-r-2 border-r-gray-200  text-gray-600  pl-6 pr-4 font-thin  flex  md:flex-col  justify-between text-[2rem] py-14  items-center  ">
        <div>
        <Link href="/">
          <div>

        <Image width={80} height={80} className="rounded-full object-contain w-full cursor-pointer " src={smallLogo} alt="Md-log"  />
          </div>
        </Link>
        </div>
      <div className=" md:flex-col  flex  gap-10 text-4xl">
        <Link href="/" >
          <div>

          <HiOutlineHome  className="cursor-pointer" />
          </div>
        </Link>
          {/* Arun kuamr */}
          <FiBell className="cursor-pointer" />
          <BiBookmark className="cursor-pointer"/>
          <RiArticleLine  className="cursor-pointer"/>
          <BsPencilSquare className="cursor-pointer"/>
      </div>
      <div className="object-cover rounded-full">
        <img  className="rounded-full cursor-pointer w-9 h-9  " src={currUser?.user?.photoURL} alt="p"  />
      </div>
    </div>
  );
};

export default MainPostNav;
