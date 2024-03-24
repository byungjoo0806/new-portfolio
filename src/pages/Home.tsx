import React from 'react';
import Profile from '../contents/profile/Profile';
import MainInfo from '../contents/main-info/MainInfo';
import FallingBlocks from '../components/FallingBlocks';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <FallingBlocks />
      <Profile />
      <MainInfo />
    </div>
  )
}

export default Home;