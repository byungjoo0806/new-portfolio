import React from 'react';

type Props = {}

const Faceimg = (props: Props) => {
  return (
    <div className='w-[40%] md:w-[15%] h-[30%] md:h-[40%] rounded-full overflow-hidden'>
        <img className='w-full h-full' src="./profile_pic.png" alt="profile pic" />
    </div>
  )
}

export default Faceimg;