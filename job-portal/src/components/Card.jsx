import React from 'react'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdEditCalendar } from "react-icons/md";

const Card = ({data}) => {
  const {companyName,companyLogo,jobTitle,minPrice,maxPrice,salaryType,
    jobLocation,postingDate,employmentType,description} =data;
  return (
    
      <section className = 'card'>
          <Link to={"/"} 
          className=" flex gap-4 flex-col sm:flex-row items-start ">
            <img src={companyLogo} alt="companyLogo"
              className=' w-1/5 h-full'
            />
            <div className=''>
              <h4 className='text-primary mb-1'>{companyName}</h4>
              <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

              <div className=' text-primary/70 text-base flex flex-wrap gap-2 mb-2 '>
              <span className='flex items-center gap-[3px]'><CiLocationOn /> {jobLocation}</span>
              <span className='flex items-center gap-[3px]'><FiClock /> {employmentType}</span>
              <span className='flex items-center gap-[3px]'><PiCurrencyDollarSimpleBold />{minPrice}-{maxPrice}k</span>
              <span className='flex items-center gap-[3px]'><MdEditCalendar /> {postingDate} </span>
              </div>

              <p className='text-base text-primary/70 '>{description}</p>
            </div>
          </Link>
      </section>
  )
}

export default Card