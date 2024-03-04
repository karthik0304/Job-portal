import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOptions, SetSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    // console.log(data)
    fetch("http://localhost:3000/api/v1/post-job", {
        method: "POST" ,
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged === true){
            alert("Job posted successfully")
        }
        reset();
      });
  };

  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "Express", label: "Express" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDb", label: "MongoDb" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      {/* form  */}
      <div className=" bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                defaultValue={"web developer"}
                {...register("jobTitle")}
                className=" create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className=" create-job-input"
              />
            </div>
          </div>
          {/* second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className=" create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Maimum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className=" create-job-input"
              />
            </div>
          </div>
          {/* 3rd  row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Salary Type</label>
              <select {...register("salaryType")} className=" create-job-input">
                <option value="">choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className=" create-job-input"
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Job posting Date</label>
              <input
                type="date"
                placeholder="Ex: New York"
                {...register("postingDate")}
                className=" create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Experirnce Level</label>
              <select
                {...register("experienceLevel")}
                className=" create-job-input"
              >
                <option value="">choose your experience</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>
          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg ">Required Skills Set:</label>
            <CreatableSelect
              isMulti
              defaultValue={selectedOptions}
              onChange={SetSelectedOptions}
              options={skillOptions}
              className="create-job-input"
            />
          </div>
          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your comapny logo url : https://image.com/img1"
                {...register("companyLogo")}
                className=" create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg ">Employment Type</label>
              <select
                {...register("employmentType")}
                className=" create-job-input"
              >
                <option value="">select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>
          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job description</label>
            <textarea
              {...register("description")}
              rows={6}
              placeholder="job description"
              className=" create-job-input"
            />
          </div>

          {/* 8th row */}
          <div>
            <label className="block mb-2 text-lg ">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className=" create-job-input"
            />
          </div>

          <input
            type="submit"
            className="my-5 block mt-12 bg-bluee text-white 
        font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
