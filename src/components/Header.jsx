import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import modern from '../assets/Modern.jpeg'
import minimal from '../assets/Minimal.jpeg'
import luxury from '../assets/Luxury.jpeg'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      <div className='bg-[#CAD4BC] relative'>
      <section className='h-auto w-[100%] flex justify-center items-center px-[36px]'>
        <div className='flex flex-col pt-[56px]'>
            <h1 className='text-[36px] font-bold'>Create A Dream Room</h1>
            <p className='text-[20px]'>Design you room click</p>
            <div className='w-[300px] h-[1px] bg-gray-200 my-[24px]'></div>
            <div>
              <Link className='bg-[#03571a] py-[11px] px-[26px] rounded-[16px] text-white' to='/canvas'>Generate Room</Link>
            </div>
        </div>

        <div className='w-[470px] h-[229px] rounded-[16px] bg-[#D9D9D9] ml-[80px] imghead mt-[56px]'>
            
        </div>
      </section>
      <section className='mt-[36px] flex justify-center items-center flex-col'>
        <div className='w-[32%] text-center'>
            <h1 className='text-[36px] font-bold'>Create your dream room with your love in your heart.</h1>
        </div>
        <div className='flex gap-[10px] mt-[36px] mb-[64px]'>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9] relative modern'>
                    <p className='absolute bottom-6 left-6 font-semibold text-white'>Modern</p>
                </div>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9] relative minimal'>
                    <p className='absolute bottom-6 left-6 font-semibold text-white'>Minimal</p>
                </div>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9] relative luxury'>
                    <p className='absolute bottom-6 left-6 font-semibold text-white'>Luxury</p>
                </div>
            </div>
      </section>
      </div>
    </>
  )
}

export default Header