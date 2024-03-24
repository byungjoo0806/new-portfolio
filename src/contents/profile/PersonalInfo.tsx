import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { IoLogoGithub } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


type Props = {}

const PersonalInfo = (props: Props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-[80%] md:w-[40%] flex justify-center items-end mb-5'>
            <p className='text-2xl font-bold'>Byungjoo Park</p>
            <p className='text-md ml-3'>Andy</p>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center mb-10'>
            <div className='w-full md:w-1/3 flex justify-center items-center'>
                <TfiEmail />
                <p className='ml-3'>andybyungjoopark@gmail.com</p>
            </div>
            <div className='w-full md:w-1/3 mt-1 md:mt-0 flex justify-center items-center'>
                <IoLogoGithub />
                <a className='ml-3 flex items-center' href="https://github.com/byungjoo0806">
                    <p className='mr-2'>Github</p>
                    <FaExternalLinkAlt />
                </a>
            </div>
            <div className='w-full md:w-1/3 mt-1 md:mt-0 flex justify-center items-center'>
                <FontAwesomeIcon icon={faLinkedin} />
                <a className='ml-3 flex items-center' href="https://www.linkedin.com/in/byungjoo-park-2700a4249/">
                    <p className='mr-2'>LinkedIn</p>
                    <FaExternalLinkAlt />
                </a>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo;