import React from 'react';

type Props = {}

const Faceimg = (props: Props) => {
  return (
    <div className='w-[50%] md:w-[25%] rounded-full border border-black overflow-hidden'>
        <img className='w-full h-full' src="./profile_pic.jpeg" alt="profile pic" />
    </div>
  )
}

export default Faceimg;