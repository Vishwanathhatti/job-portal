import { Facebook, InstagramIcon, LinkedinIcon, LucideTwitter } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const {user} = useSelector((store) => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
    <div classNameName=''>
<footer className="bg-[#caced3] py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h4 className="text-3xl font-bold mb-4 text-blue-600">Job Portal</h4>
                <p className='text-lg'>Job Portal is the comprehensive platform for streamlined job search and employer engagement.</p>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                {
                    user && user.role== "recruiter" ?  
                    (
                        <ul className="space-y-2">
                        <li><Link to="/admin/companies" className="hover:text-gray-700">Companies</Link></li>
                        <li><Link to="/admin/jobs" className="hover:text-gray-700">Jobs</Link></li>
                    </ul>
                    )
                    : 
                    (
                        <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                        <li><Link to="/jobs" className="hover:text-gray-700">Jobs</Link></li>
                        <li><Link to="/browse" className="hover:text-gray-700">Browse</Link></li>
                        <li><Link to="/profile" className="hover:text-gray-700">Profile</Link></li>
                    </ul>
                    ) 

                }
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <ul className="space-y-2">
                    <li><Link  className="hover:text-gray-700">support@jobportal.com</Link></li>
                    <li><Link  className="hover:text-gray-700">+9999-99999</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <Link className="hover:text-blue-400"><LinkedinIcon/></Link>
                    <Link className="hover:text-blue-400"><LucideTwitter/></Link>
                    <Link className="hover:text-pink-500"><InstagramIcon/></Link>
                </div>
            </div>
        </div>
        <div className="text-center mt-8">
            <p>© 2024 Job Portal. All rights reserved.</p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer