import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const jobRoles=['Frontend Developer','Backend Developer', 'Software Developer', 'Project Manager', 'Data Analyst', 'Data Scientist', 'CyberSecurity Analyst', 'UI/UX Designer']


const PopularSearches = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const searchJobHandler = (query)=>{
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }
  return (
    <div>
        <div className='flex flex-col items-center justify-center  w-full'>
  <h1 className='text-lg sm:text-xl  font-semibold'>Popular searches</h1>
  <div className='flex items-center justify-center gap-4 flex-wrap my-4 md:w-[60%]'>
    {
        jobRoles.map((role,index)=>(
        <Button onClick={()=>searchJobHandler(role)} variant="outline" className="outline outline-1 outline-purple-700 hover:text-white hover:bg-purple-700 ">{role}</Button>
        ))
    }
  
  </div>
</div>

    </div>
  )
}

export default PopularSearches