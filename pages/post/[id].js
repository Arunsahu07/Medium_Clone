
import React from 'react'
import MainPostNav from '../../components/MainPostNav'
import Post from '../../components/MainPost';
import Recomendations from '../../components/Recomendations';
const MainPost = () => {
  return (
    <div className='  justify-around    w-full border-8  border-x-green-500   '  >
        <div className='md:flex justify-between   '>

   <MainPostNav />
   <Post />
   
   <Recomendations />
        </div>
    </div>
  )
}

export default MainPost