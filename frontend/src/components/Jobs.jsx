import React, { useEffect, useState } from 'react'
import JobFilter from './JobFilter'
import LatestJobsCard from './LatestJobsCard'
import { jobListings } from './LatestJobs'
import JobCard from './JobCard'
import { useSelector } from 'react-redux'
import Footer from './shared/Footer'



const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector(store => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
        const filteredJobs = allJobs.filter((job) => {
            return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        })
        setFilterJobs(filteredJobs)
    } else {
        setFilterJobs(allJobs)
    }
}, [allJobs, searchedQuery]);

  return (
    <div>
    <div className='max-w-7xl mx-auto my-5 '>
        <div className='flex gap-5 justify-center w-full flex-wrap ' >
            <div className='md:w-[35%] w-full flex justify-center p-4'>
                <JobFilter />
            </div>
            <div className='flex flex-col md:w-[60%] w-full md:max-h-screen scrollbar-hidden overflow-y-scroll items-center gap-5 p-3'>
            {
              filterJobs.length <=0 ? <span>Job not Found</span>
              :
            filterJobs.map((job)=> (
              <JobCard key={job?._id} job={job} />
            ))
        }
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Jobs