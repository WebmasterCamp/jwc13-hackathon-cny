import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <nav className='h-[68px] w-[100%] bg-[#CAD4BC] flex justify-around items-center pl-[28px]'>
        <div className='flex gap-[10px] items-center'>
            <img src={logo} alt="" className='w-[60px] h-[60px]' />
            <a href="/" className='font-bold text-[36px]'>INTELLIGIBLE</a>
        </div>
        <div className='flex gap-[36px] items-center pr-[40px]'>
            <div className='bg-white rounded-full'>
            <input type="text" placeholder='Set Budget...' className='py-[5px] px-[20px] bg-white outline-none	rounded-full' />
            <a href="" className='pr-[8px]'>SUBMIT</a>
            </div>
            <a href="" className='px-[22px] py-[6px] bg-white rounded-full'>History</a>
            <Link to='/Login'><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4323 20.6241V18.5809C18.4323 17.4971 18.0018 16.4577 17.2354 15.6914C16.469 14.925 15.4296 14.4945 14.3458 14.4945H6.17294C5.08914 14.4945 4.04974 14.925 3.28338 15.6914C2.51702 16.4577 2.08649 17.4971 2.08649 18.5809V20.6241M14.3458 6.32156C14.3458 8.57844 12.5163 10.408 10.2594 10.408C8.0025 10.408 6.17294 8.57844 6.17294 6.32156C6.17294 4.06467 8.0025 2.23511 10.2594 2.23511C12.5163 2.23511 14.3458 4.06467 14.3458 6.32156Z" stroke="#1E1E1E" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </Link>
            <Link to='/History'><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.52637 1.91302H5.73301L8.55146 15.5924C8.64763 16.0628 8.91103 16.4853 9.29556 16.786C9.68008 17.0867 10.1612 17.2464 10.6548 17.2372H20.8769C21.3705 17.2464 21.8516 17.0867 22.2361 16.786C22.6207 16.4853 22.8841 16.0628 22.9802 15.5924L24.6629 7.02109H6.78467M10.9913 22.3453C10.9913 22.9095 10.5205 23.3669 9.93965 23.3669C9.35883 23.3669 8.88799 22.9095 8.88799 22.3453C8.88799 21.7811 9.35883 21.3237 9.93965 21.3237C10.5205 21.3237 10.9913 21.7811 10.9913 22.3453ZM22.5596 22.3453C22.5596 22.9095 22.0887 23.3669 21.5079 23.3669C20.9271 23.3669 20.4563 22.9095 20.4563 22.3453C20.4563 21.7811 20.9271 21.3237 21.5079 21.3237C22.0887 21.3237 22.5596 21.7811 22.5596 22.3453Z" stroke="#1E1E1E" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar