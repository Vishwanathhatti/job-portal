import { Bookmark, Briefcase, BriefcaseBusiness, Clock, IndianRupee, LocateFixedIcon, MapPin, ScrollText, User } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const LatestJobsCard = ({job}) => {
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 1000 ms * 60 s * 60 min * 24 hours
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const createdAtDate = new Date(job?.createdAt);
    const daysAgoText = isToday(createdAtDate) ? "Today" : `${daysAgoFunction(createdAtDate)} days ago`;


    const navigate= useNavigate()
    const truncatedDesc = job?.description.length > 100 ? job?.description.substring(0, 100) + "..." : job?.description
    return (
        <div className='flex flex-col gap-4 p-4 w-[95%] md:w-[40%] shadow-lg hover:shadow-xl md:hover:shadow-2xl  transition-shadow rounded-lg bg-white'>
        <div className='flex justify-between '>
        <div>
            <h1 className='text-2xl font-semibold text-blue-500'>{job?.title}</h1>
            <h2 className='text-lg font-semibold'>{job?.company?.name}</h2>
            <h3 className='text-sm'><MapPin size={16} strokeWidth={1} className='inline '/> {job?.location}</h3>
        </div>
        <img className='w-20 h-20 object-contain rounded-lg ' src={job?.company?.logo} />
</div>
<div>
    <ul className='flex gap-5'>
        <li><BriefcaseBusiness size={16} strokeWidth={1.5} className='inline' /> {job?.experienceLevel}</li>
        <li><IndianRupee size={16} strokeWidth={1.5} className='inline' />{job?.salary} LPA</li>
        <li><Clock size={16} strokeWidth={1.5} className='inline' /> {job?.jobType}</li>
        <li><User size={16} strokeWidth={1.5} className='inline' /> {job?.position}</li>
    </ul>
</div>
<div>
    <p><ScrollText size={16} strokeWidth={1} className='inline' /> {truncatedDesc}</p>
</div>
<div className='flex justify-between items-center'>
    <div>{daysAgoText}</div>
    <div className='flex gap-6'>
        <Button onClick={() => navigate(`/description/${job._id}`)} variant="outline" className="bg-blue-600 hover:bg-blue-700 hover:text-white text-white">Apply</Button>
        {/* <Button variant="outline" className=" hover:text-blue-400"><Bookmark size={16} className='mr-1'/> Save</Button> */}
    </div>
</div>
</div>
  )
}

export default LatestJobsCard