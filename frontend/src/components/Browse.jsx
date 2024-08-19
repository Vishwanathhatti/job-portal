import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import JobCard from './JobCard';
import Footer from './shared/Footer';

const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    return (
        <div>
            <div className='max-w-4xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='flex flex-col gap-5 p-5'>
                    {
                        allJobs.map((job) => {
                            return (
                                <JobCard key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Browse