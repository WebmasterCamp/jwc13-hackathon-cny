import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {

  return (
    <>
      <section className='h-auto w-[100%] flex justify-center items-center mt-[56px]'>
        <div className='flex flex-col'>
            <h1 className='text-[36px] font-bold'>Create A Dream Room</h1>
            <p className='text-[20px]'>Design you room click</p>
            <div className='w-[300px] h-[4px] bg-gray-200 my-[24px]'></div>
            <a href="" className='bg-[#393939] py-[11px] px-[26px] rounded-[16px] text-white'>Generate Room</a>
        </div>

        <div className='w-[470px] h-[229px] rounded-[16px] bg-[#D9D9D9] ml-[145px]'>

        </div>
      </section>
      <section className='mt-[36px] flex justify-center items-center flex-col'>
        <div className='w-[32%] text-center'>
            <h1 className='text-[36px] font-bold'>Create your dream room with your love in your heart.</h1>
        </div>
        <div className='flex gap-[10px] mt-[36px]'>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9]'>

                </div>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9]'>

                </div>
                <div className='w-[300px] h-[300px] rounded-[16px] bg-[#D9D9D9]'>

                </div>
            </div>
      </section>
    </>
  )
}

export default Header