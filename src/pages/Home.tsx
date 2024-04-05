import React from 'react';
import Profile from '../contents/profile/Profile';
import MainInfo from '../contents/main-info/MainInfo';
import FallingBlocks from '../components/FallingBlocks';
// import Intro from '../contents/intro/Intro';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <FallingBlocks />
      {/* <Intro /> */}
      <Profile />
      <MainInfo />
    </div>
  )
}

export default Home;