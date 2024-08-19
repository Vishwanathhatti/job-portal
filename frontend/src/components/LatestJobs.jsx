import React from 'react'
import LatestJobsCard from './LatestJobsCard';
import { useSelector } from 'react-redux';

export const jobListings = [
  {
    jobTitle: "Frontend Developer",
    description: "We are looking for a skilled Frontend Developer to create responsive and dynamic web applications.",
    requirements: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
    salary: 6, // Salary in thousands
    experienceLevel: 3, // Experience level in years
    location: "Bengaluru, Karnataka",
    jobType: "Full-time",
    position: 4,
    companyName: "Tech Innovators Inc."
  },
  {
    jobTitle: "Data Analyst",
    description: "Join our team as a Data Analyst to help us make data-driven decisions and optimize our processes.",
    requirements: ["SQL", "Python", "Excel", "Data Visualization", "Power BI"],
    salary: 7, // Salary in thousands
    experienceLevel: 2, // Experience level in years
    location: "Mumbai, Maharashtra",
    jobType: "Full-time",
    position: 2,
    companyName: "Data Solutions Corp."
  },
  {
    jobTitle: "Backend Developer",
    description: "Seeking a Backend Developer to work on server-side logic, databases, and APIs for our web applications.",
    requirements: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Authentication"],
    salary: 1, // Salary in thousands
    experienceLevel: 5, // Experience level in years
    location: "Hyderabad, Telangana",
    jobType: "Internship",
    position: 3,
    companyName: "Code Masters LLC"
  },
  {
    jobTitle: "UI/UX Designer",
    description: "Looking for a creative UI/UX Designer to design intuitive and visually appealing user interfaces.",
    requirements: ["HTML", "CSS", "JavaScript", "Figma", "Wireframing"],
    salary: 8, // Salary in thousands
    experienceLevel: 4, // Experience level in years
    location: "Delhi, Delhi",
    jobType: "Part-time",
    position: 2,
    companyName: "Creative Minds Studio"
  }
];


const LatestJobs = () => {
  const {allJobs} = useSelector(store=> store.job)
  return (
    <div className='flex flex-col items-center my-10'>
        <h1 className='text-3xl font-semibold my-10'>Latest Job Openings</h1>
        <div className='flex flex-wrap justify-center items-center gap-12 px-1 w-full'>
          {
             allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,4).map((job)=>(
              <LatestJobsCard key={job._id} job={job} />
            ))
          }
        </div>
    </div>
  )
}

export default LatestJobs