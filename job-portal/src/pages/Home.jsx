import { useEffect, useState, useCallback } from "react"
import Banner from "../components/Banner"
import { MdFunctions } from "react-icons/md";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/sidebar";
import NewsLetter from "../components/NewsLetter";


const Home = () => {

  const [query ,  setQuery] = useState("");
  const [locationQuery , setLocationQuery] = useState("");

  const handleInputChange = (event)=>{
    setQuery(event.target.value);
  }

  const handleInputChange2 = (event)=>{
    setLocationQuery(event.target.value);
  }

  const [selectCategory , setSelectCategory] =useState(null);
  const [jobs , setJobs] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect( () => {
    setIsLoading(true);
    fetch("jobs.json").then ( res => res.json())
    .then( data =>{
      setJobs(data);
    })
    setIsLoading(false);
  }  ,[])
  
  //filter jobs by title
  const filteredItems = jobs.filter( (job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!== -1 );

  const filteredItemsbyLocation = jobs.filter( (job)=>job.jobLocation.toLowerCase().indexOf(locationQuery.toLowerCase())!== -1 );

  // console.log(filteredItems)

  //----- radio filtering ------
  const handleChange = (event) =>{
    setSelectCategory(event.target.value);
    console.log(event.target.value);
  }

  //-----button based filtering 
  const handleClick = (event) => {
    setSelectCategory(event.target.value) 
  }

  //calculate the index range 
  const calculatePageRange = () =>{
    const startIndex= (currentPage - 1) * itemsPerPage ;
    const endIndex = startIndex + itemsPerPage ;
    return {startIndex , endIndex};
  }

  //function for next page
  const nextPage = ()=>{
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }
  //function for pervious 
  const prevPage = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  }

  // main Functions
  const filteredData = ( jobs, selected , query)=>{

    let filteredJobs = jobs;
    //filtering input items
    if(query){
      filteredJobs = filteredItems;
    }
    if(locationQuery){
      filteredJobs = filteredItemsbyLocation;
    }

    //category filtering
    if(selected){
      filteredJobs = filteredJobs.filter(
        ({jobLocation,
          maxPrice,
        experienceLevel,
        salaryType,
        employmentType,
        postingDate
      } ) => 
          jobLocation.toLowerCase() === selected.toLowerCase() || 
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected  ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    // console.log(filteredJobs);

    // slice the data based on current page
    const {startIndex , endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex,endIndex);
    return filteredJobs.map( (data,i) =><Card key={i} data={data} /> )
  }

  const result = filteredData(jobs,selectCategory , query);

  useEffect(()=>{
    setCurrentPage(1);
  },[selectCategory]);

  return (
    <div >

      <Banner handleInputChange={handleInputChange}query={query} handleInputChange2={handleInputChange2} />

        {/* main Content */}
      <div  className=" bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ">
      {/* for left side  */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange ={handleChange} handleClick={handleClick} />

        </div>
        {/* for job cards */}
       
        <div className=" col-span-2 bg-white p-4 rounded "> 
        {
          isLoading ? (<p className=" font-medium">Loading....</p>) : 
           result.length > 0 ? ( <Jobs result={result}/>) :
           ( <>
            <h3 className=" text-lg font-bold mb-2">{result.length} Jobs </h3>
           <p> No data found</p>
           </>)
        }

        {/* pagination here */}
        {
          result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              {
                currentPage === 1 ? ("") : (
                  <button className="hover:underline"
                  onClick={prevPage}>Previous</button>
                )
              }
              
              <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)} </span>

                {
              currentPage === Math.ceil(filteredItems.length / itemsPerPage) ? ("") :
              (
                <button className="hover:underline"
                onClick={nextPage}>Next</button>
              )

                }
              

            </div>
          ) : ""
        }


       </div>

        {/* for right side  */}
        <div className="bg-white p-4 rounded " >
        <NewsLetter/>
        </div>

      </div>
    </div>
  )
}

export default Home