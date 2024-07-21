import React, { useRef, useState } from 'react';
import room from '../assets/rooms/room1.jpg'
import html2canvas from 'html2canvas';

import clock1 from '../assets/furnitures/clocks/clock1.png'
import clock2 from '../assets/furnitures/clocks/clock2.png'

function Canvas() {

  const cnt = [0, 0, 0, 0]
  const [clocksIdx, setClocksIdx] = useState(0)
  const [vasesIdx, setVasesIdx] = useState(0)

  const [buy, setBuy] = useState(["เก้าอี้", "โคมไฟ"])

  const divRef = useRef();
  const clocks = [clock1, clock2]

  const downloadImage = async () => {
    const canvas = await html2canvas(divRef.current);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'my-room.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (key) => {
    console.log(key)
  }

  return (
    <div className='flex flex-col pt-[40px] px-[50px] gap-[54px]'>

      <div className='flex gap-[22px]'>
        <div className='flex flex-col gap-[11px]'>
          <div className='w-[200px] h-[50px] bg-white rounded-md flex justify-center items-center'>
            <h1 className='font-[700] text-[22px]'>LIST</h1>
          </div>

          <div className='w-[200px] h-[100%] bg-white rounded-md'>
            <div className='flex flex-col'>
              {buy.map((key, value) => {
                return <div className='flex justify-between items-center'>
                  <div className='pl-3'>
                    {key}
                  </div>
                  <div className='flex justify-center items-center pr-4'>
                    <p className='mr-2'>1 ea</p>
                    <svg width="20" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5Z" fill="#D9D9D9" />
                      <path d="M6.625 7.625H9.125L10.8 15.9938C10.8572 16.2815 11.0137 16.54 11.2422 16.7239C11.4707 16.9079 11.7567 17.0056 12.05 17H18.125C18.4183 17.0056 18.7043 16.9079 18.9328 16.7239C19.1613 16.54 19.3178 16.2815 19.375 15.9938L20.375 10.75H9.75M12.25 20.125C12.25 20.4702 11.9702 20.75 11.625 20.75C11.2798 20.75 11 20.4702 11 20.125C11 19.7798 11.2798 19.5 11.625 19.5C11.9702 19.5 12.25 19.7798 12.25 20.125ZM19.125 20.125C19.125 20.4702 18.8452 20.75 18.5 20.75C18.1548 20.75 17.875 20.4702 17.875 20.125C17.875 19.7798 18.1548 19.5 18.5 19.5C18.8452 19.5 19.125 19.7798 19.125 20.125Z" stroke="#1E1E1E" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              })}
            </div>

            <div className='flex justify-center items-center '>
              <div className='bg-green-200 p-1 rounded-md'>
                <h1 className='font-[700]'>SUBMIT</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div ref={divRef} className="relative w-[100%]">
            <img className="rounded-md" alt="room" src={room}></img>

            <div className="absolute top-[25%] left-[50%] drop-shadow-lg">
              <img src={clocks[cnt[0]]} className='w-[10%]'></img>
            </div>

            <div className="absolute top-[25%] left-[50%] drop-shadow-lg">
              <img src={clocks[cnt[0]]} className='w-[10%]'></img>
            </div>

            <button className="p-1 rounded-md bg-white absolute bottom-[10px] right-[10px]" onClick={downloadImage}>
              Download this image
            </button>
          </div>

          {/* <button onClick={() => { setClocksIdx((clocksIdx + 1) % 2) }}>Change</button> */}
        </div>
      </div>

      <div className='h-[240px] w-[100%] flex items-center justify-around'>
        <div className='h-[161px] w-[142px] bg-gray-200 a1 rounded-[15px]' key={0} onClick={handleClick}>
        </div>
        <div className='h-[161px] w-[142px] bg-gray-200 a2 rounded-[15px]' >
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='h-[161px] w-[142px] bg-gray-200 l1 rounded-[15px]'>
        </div>
        <div className='h-[161px] w-[142px] bg-gray-200 l2 rounded-[15px]'>
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='h-[161px] w-[142px] bg-gray-200 c1 rounded-[15px]'>
        </div>
        <div className='h-[161px] w-[142px] bg-gray-200 c2 rounded-[15px]'>
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='h-[161px] w-[142px] bg-gray-200 s1 rounded-[15px]'>
        </div>
        <div className='h-[161px] w-[142px] bg-gray-200 s2 rounded-[15px]'>
        </div>
      </div>
    </div>
  )
}

export default Canvas