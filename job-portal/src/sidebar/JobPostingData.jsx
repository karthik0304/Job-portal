import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const TwentyFourHoursAgo = new Date(now - 24 * 60 *60 * 1000);
    const SevendaysAgo = new Date(now - 7 * 24 * 60 *60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 *60 * 1000);

    // convert date to String
    const TwentyFourHoursAgoDate = TwentyFourHoursAgo.toISOString().slice(0,10);
    const SevendaysAgoDate =  SevendaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);

  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of posting </h4>

        <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test3'
                 id='test3' value=""
                 onChange={handleChange} />
                 <span className='checkmark'></span> All time
            </label>

            <InputField handleChange = {handleChange} value={TwentyFourHoursAgoDate} title=" Last 24 hours" name='test3'/>
            <InputField handleChange = {handleChange} value={SevendaysAgoDate} title="Last 7 days" name='test3'/>
            <InputField handleChange = {handleChange} value={ThirtyDaysAgoDate} title="Last Month" name='test3'/>

            
        </div>
    </div>
  )
}

export default JobPostingData