import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

const SalaryPage = () => {
    const [searchText , setSearchText] = useState("");
    const [salary , SetSalary] = useState([]);

    useEffect( ()=>{
        fetch("salary.json")
        .then(res =>res.json())
        .then(data => SetSalary(data));
    } ,[searchText])

    const clickHandler = () => {
        const filter = salary.filter(
             (job)=>
                job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
                 console.log(filter);
                SetSalary(filter);
    }

  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <PageHeader title={"Estimate Salary"} path={"salary"} />

    <div className='mt-5'>
        <div className='search-box p-2 mb-2 text-center'>
            <input type='text' name='search' id='search' 
                className='py-2 pl-3 border focus:outline-none lg:w-1/2 mb-4 w-full'
                onChange={(event) => setSearchText(event.target.value)}
            />
            <button  onClick={clickHandler} className='bg-bluee px-8 py-2 text-white rounded-sm font-semibold mb-2'>Search</button>
        </div>
    </div>

        <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-12 my-12 items-center'>
        {

            salary.map((data) => (
            <div key={data.id} className='shadow-md px-4 py-8 '>
            <h4 className='font-semibold text-xl' >{data.title}</h4>
            <p className='my-2 font-medium text-bluee text-lg '>{data.salary}</p>
            <div className='flex flex-wrap gap-4'>
                <p className='underline'>{data.status}</p>
                <p className='underline'>{data.skills}</p>
            </div>
            </div>
            ))
            }
        </div>
    </div>

   
  )
}

export default SalaryPage