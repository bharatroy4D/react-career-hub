import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h5 className='text-4xl text-center'>Job Category List : {jobs.length}</h5>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default JobCategory;