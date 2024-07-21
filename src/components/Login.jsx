import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../assets/logo.png'
import human from '../assets/human.png'

function Login() {

  return (
    <>
      <div className='bg-[#CAD4BC] w-[100%] h-screen flex justify-center items-center'>
        <div className='w-[425px] h-[576px] bg-white rounded-[16px] flex flex-col items-center'>
            <div className='flex justify-between px-[18px] py-[20px] items-center'>
                <h1 className='font-bold text-[36px]'>Login</h1>
                <img src={logo} alt="" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[214px] h-[214px] bg-gray-500 rounded-full flex justify-center items-center'>
                    <img src={human} alt="" className='w-[171px] h-[171px]' />
                </div>
                
            </div>
            <div className='flex flex-col w-[100%] justify-center items-center'>
                <div className='w-[80%]'>
                    <p>Username</p>
                    <input type="text" className='bg-[#03571a] w-[100%] px-[16px] py-[12px] outline-none rounded-full' placeholder='Enter your name'/>
                </div>
                <div className='w-[80%]'>
                    <p>Password</p>
                    <input type="password" className='bg-[#03571a] w-[100%] px-[16px] py-[12px] outline-none rounded-full' placeholder='Enter your password'/>
                </div>
                
            </div>
            <div className='flex w-[100%] justify-center items-center mt-[36px]'>
                    <a href="" className='px-[22px] py-[8px] rounded-full bg-[#03571a] text-white'>Submit</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
