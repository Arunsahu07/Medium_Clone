import Banner from '../components/Banner'
import Head from 'next';
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useContext, useEffect } from 'react';
import { MediumContext } from '../context/MediumContext';
import PostCard from '../components/PostCard'
export default function Home() {
  const {setCurrUser} = useContext(MediumContext);  
  if(typeof( window) == undefined &&  window.localStorage.getItem("user"))
  {
    setCurrUser( JSON.parse(window.localStorage.getItem("user")))
    let userr =  window.localStorage.getItem("user")
    setCurrUser(JSON.parse(userr))
  }
  return (
    <div>
      {/* <head>
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet"/>
      </head> */}
      <Header/>
      <Banner/>
      <PostCard/>
    
    </div>
  )
}
