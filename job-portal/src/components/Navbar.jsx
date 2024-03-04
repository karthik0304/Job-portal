import React, { useEffect, useState } from 'react'
import { MdCircleNotifications } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = () => {
 const [isMenuOpen , setIsMenuOpen] = useState(false);

 const handleMenuToggler = ()=>{
    setIsMenuOpen(!isMenuOpen);
 }

//  useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         // Adjust the threshold based on your design
//         setIsMenuOpen(false);
//       }
//     }
// } ) ;

  return (
   <header className='  max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
    <nav className='flex justify-between items-center py-6'>
     <NavLink to={"/"}> 
        <div  className='flex items-center gap-1 text-black'>
            <MdCircleNotifications className='text-2xl text-bluee' />
            <h1>JobPortal</h1>
        </div>    
      </NavLink>
      {/* for large devices and medium devices*/}
      <ul className='  hidden md:flex gap-12  '>
        <li className=' text-base text-primary first:text-white py-1 '>
            <NavLink to={"/"} >Start a Search</NavLink>
        </li> 
        <li  className='  text-base text-primary first:text-white py-1 '>
            <NavLink to={"/my-job"}>My Jobs</NavLink>
        </li> 
        <li  className='  text-base text-primary first:text-white py-1'>
            <NavLink to={"/salary"}>Salary Estimate</NavLink>
        </li> 

        <li  className=' text-base text-primary first:text-white py-1'>
            <NavLink to={"/post-job"}>Post Job</NavLink>
        </li>   
      </ul>
        {/* signup an dlogin button */}
      <div className='tetx-base text-primary font-medium space-x-5 hidden lg:block'>
        <NavLink to={"/login"}>
            <button className='py-2 px-5 border rounded '>Log In</button>
        </NavLink>
        <NavLink to={"/signup"}>
            <button className='py-2 px-5 border rounded bg-bluee text-white '>Sign up</button>
        </NavLink>
      </div>

    {/* mobile menu */}
    <div className=' md:hidden lg:hidden sm:block'>
        <button onClick={handleMenuToggler}>
            {
                isMenuOpen ? <HiMiniXMark className=' w-6 h-6 text-primary' /> 
                    : <HiMiniBarsArrowDown className=' w-6 h-6 text-primary' />
            }
        </button>
    </div>
    </nav>
    
     {/* {navIteems for mobile} */}
        <div className={ `px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} md:hidden`}>
            <ul className='md:hidden'>

                <li className=' text-base text-white '>
                    <NavLink to={"/"} >Start a Search</NavLink>
                </li> 
                <li className=' text-base text-white ' >
                    <NavLink to={"/my-job"}>My Jobs</NavLink>
                </li> 
                <li className=' text-base text-white '>
                    <NavLink to={"/salary"}>Salary Estimate</NavLink>
                </li> 
                <li className=' text-base text-white '>
                    <NavLink to={"/post-job"}>post Job</NavLink>
                </li>
                <li className='text-base text-white '> 
                    <NavLink to={"/login"}>Log In </NavLink>
                </li>   
            </ul>
        </div>
   </header>
  )
}

export default Navbar