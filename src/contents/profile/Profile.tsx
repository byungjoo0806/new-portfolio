import React from 'react';
import Faceimg from './Faceimg';
import PersonalInfo from './PersonalInfo';

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='w-full md:w-[60%] border-b border-black flex flex-row justify-center items-center z-10'>
        <Faceimg />
        {/* {<PersonalQuote />} */}
        <div className='empty-div w-full h-[10px]'></div>
        <PersonalInfo />
    </div>
  )
}

export default Profile;