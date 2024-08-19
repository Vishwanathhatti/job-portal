import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import Footer from '../shared/Footer'

const CompanyCreate = () => {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const [companyName, setCompanyName]= useState()
    const registerNewCompany= async ()=>{
        try {
            const res= await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your Company name? you can change this later</p>
                </div>
                <div className='w-4/5 mx-auto'>
                    <Label>Company Name</Label>
                    <Input type="text" className="my-2" placeholder="Zidio Development, Microsoft, Google, etc." onChange={(e)=>{ setCompanyName(e.target.value)}} />
                </div>
                <div className='flex items-center justify-center gap-2 my-10'>
                    <Button variant="outline" onClick={()=>{navigate('/admin/companies')}}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CompanyCreate