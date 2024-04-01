import React from 'react';

type Props = {}

const Faceimg = (props: Props) => {
  return (
    <div className='w-[50%] md:w-[20%] h-[50%] rounded-full overflow-hidden'>
        <img className='w-full h-full' src="./profile_pic.jpeg" alt="profile pic" />
        {/* <img className='w-full h-full' src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp' alt='testing' /> */}
    </div>
  )
}

export default Faceimg;