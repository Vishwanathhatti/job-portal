import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import Footer from "./shared/Footer";

const JobDescription = () => {

  const params = useParams();
  const jobId = params.id;
  const {singleJob} = useSelector(store=>store.job)
  const {user} = useSelector(store=>store.auth)
  const dispatch = useDispatch()
  const isInitiallyApplied= singleJob?.applications.some(application=> application.applicant == user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied)
  const applyJobHandler= async () =>{
    try {
      const res= await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true})
      if(res.data.success){
        setIsApplied(true)
        const updatedSingleJob= {... singleJob, applications:[... singleJob.applications,{applicant:user?._id}]}
        dispatch(setSingleJob(updatedSingleJob))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  useEffect(()=>{
    const fetchSingleJob = async ()=>{
        try {
            const res= await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true})
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
                setIsApplied(res.data.job.applications.some(application=>application.applicant== user?._id))
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchSingleJob()
},[jobId,dispatch, user._id])

  return (
    <div>
    <div className="max-w-7xl mx-auto my-10 px-10">
      <h1 className="font-bold text-xl ">{singleJob?.title}</h1>
      <div className="flex justify-between items-center">
              <div>
        <Badge className="text-orange-600 font-bold mx-1 " variant="ghost">{singleJob?.position} Positions</Badge>
        <Badge className="text-green-600 font-bold mx-1 " variant="ghost">{singleJob?.jobType}</Badge>
        <Badge className="text-purple-700 font-bold mx-1 " variant="ghost">{singleJob?.salary} LPA</Badge>
      </div>
      <Button
      onClick={isApplied ? null : applyJobHandler} 
      disabled={isApplied} 
      className={` ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-800'} `}>
        {isApplied ? "Already Applied" : "Apply Now" }
        </Button>
      </div>
      <h1 className=" border-b-2 border-b-gray-300 font-medium py-4 ">Job Description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
        <h1 className="font-bold my-1">Requirements: <span className="pl-4 font-normal text-gray-800">
          {
            singleJob?.requirements?.length !== 0 ? singleJob?.requirements?.map((item, index) => <span key={index}>{item}, </span>) : <span>NA</span>
          }</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} yrs</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}</span></h1>
        <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default JobDescription;
