import React from 'react'
import { NavLink } from 'react-router-dom';
const Pageheader = ({title , path}) => {
  return (
    <div className='py-24 mt-3 flex items-center justify-center bg-[#FAFAFA] rounded '>
        <div>
            <h2 className='text-3xl text-bluee font-medium mb-1 text-center '>{title}</h2>
            <p className='text-sm text-center'><NavLink to={"/"}>Home</NavLink> /{path}  </p>
        </div>

    </div>
  )
}

export default Pageheader