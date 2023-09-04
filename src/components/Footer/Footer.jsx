import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center'>

      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
          <strong>Job</strong>Search
        </h1>
        <p className='text-whote pb-[13px] opacity-70 leading-7 '>
        We always make our seekers and companies find the best jobs and employers find the best candidates.
      </p>
      </div>
     <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Company
      </span>
      <div className='grid gap-3'>
        <li className='text-white opacity-[.7]'>About</li>
        <li className='text-white opacity-[.7]'>Features</li>
        <li className='text-white opacity-[.7]'>FAQ</li>
        <li className='text-white opacity-[.7]'>News</li>
        
      </div>
     </div>
     <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Resources
      </span>
      <div className='grid gap-3'>
        <li className='text-white opacity-[.7]'>Account</li>
        <li className='text-white opacity-[.7]'>Support Center</li>
        <li className='text-white opacity-[.7]'>Feedback</li>
        <li className='text-white opacity-[.7]'>Contact Us</li>
        
      </div>
     </div>
     <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Support
      </span>
      <div className='grid gap-3'>
        <li className='text-white opacity-[.7]'>Events</li>
        <li className='text-white opacity-[.7]'>Promo</li>
        <li className='text-white opacity-[.7]'>Req Demo</li>
        <li className='text-white opacity-[.7]'>Careers</li>
        
      </div>
     </div>
     <div className='grid'>
      <span className='divTitile text-[18px] font-semibold pb-[1.5rem] text-white'>
        Contact Info
      </span>
      <div>
        <small className='text-[14px] text-white'>
          vrutikaahir812@gmail.com
        </small>
        <div className='icons felx gap-4 py-[1rem]'>
<AiFillInstagram className='bg-white p-[18px] rounded-full icon text-blueColor'/>
<AiFillFacebook className='bg-white p-[18px] rounded-full icon text-blueColor'/>
<AiFillTwitterCircle className='bg-white p-[18px] rounded-full icon text-blueColor'/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer