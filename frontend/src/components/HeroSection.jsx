import { setSearchedQuery } from '@/redux/jobSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const [query,setQuery]= useState("")
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const searchJobHandler = ()=>{
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }
  return (
    <div>
        <div className='mt-10 mb-5'>
      <h1 className='text-center m-6 text-4xl sm:text-5xl font-bold text-blue-600'>Find your dream job now</h1>
      <h3 className='text-center mb-12  sm:text-2xl '>More than 1000 jobs for you to explore</h3>
<div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input
    type="text"
    placeholder="Job title, keywords, company name"
    onChange={(e)=> setQuery(e.target.value)}
    className="w-full bg-white pl-4 text-sm border-none focus:outline-none focus:ring-0 focus:border-transparent"
  />
  <button
    type="button"
    onClick={searchJobHandler}
    className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
  >
    Search
  </button>
</div>
</div>
    </div>
  )
}

export default HeroSection