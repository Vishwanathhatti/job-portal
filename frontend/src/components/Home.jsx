import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import PopularSearches from './PopularSearches'
import LatestJobs from './LatestJobs'
import userGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from './shared/Footer'

const Home = () => {
  userGetAllJobs()
  const {user} = useSelector(store=> store.auth)
  const navigate = useNavigate()
  useEffect(()=>{
    if(user?.role == 'recruiter'){
      navigate('/admin/companies')
    }
  },[])
  return (
    <div>
        <HeroSection />
        <PopularSearches />
        <LatestJobs />
        <Footer/>
    </div>
  )
}

export default Home