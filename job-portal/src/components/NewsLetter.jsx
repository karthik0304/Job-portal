import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText />
            Email me for jobs </h3>
            <p className='text-primary/75 text-base mb-4'>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry, Lorem Ipsum.</p>

            <div className='w-fulll space-y-4'>
                <input className='w-full block py-2 pl-3 border focus:outline-none'
                type='email' name='email' 
                id='email' placeholder='name@email.com' />
                <input type='submit' value={"Subscribe"}
                    className='w-full block py-2 pl-3 border focus:outline-none
                    bg-bluee rounded-sm text-white cursor-pointer font-semibold' />
            </div>

        </div>
        {/* 2nd part */}
        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket/>
            Get noticed faster </h3>
            <p className='text-primary/75 text-base mb-4'>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry, Lorem Ipsum.</p>

            <div className='w-fulll space-y-4'>
                <input type='submit' value={"Upload your resume"}
                    className='w-full block py-2 pl-3 border focus:outline-none
                    bg-bluee rounded-sm text-white cursor-pointer font-semibold' />
            </div>

        </div>

    </div>
  )
}

export default NewsLetter