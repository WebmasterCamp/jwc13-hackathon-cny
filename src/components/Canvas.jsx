import React, { useRef, useState } from 'react';
import room from '../assets/rooms/room1.jpg'
import html2canvas from 'html2canvas';

import clock1 from '../assets/furnitures/clocks/clock1.png'
import clock2 from '../assets/furnitures/clocks/clock2.png'

import table1 from '../assets/furnitures/coffeetable/table1.webp'
import table2 from '../assets/furnitures/coffeetable/table2.webp'

import lamp1 from '../assets/furnitures/lamp/lamp1.png'
import lamp2 from '../assets/furnitures/lamp/lamp2.png'

import sofa1 from '../assets/furnitures/sofa/sofa1.webp'
import sofa2 from '../assets/furnitures/sofa/sofa2.png'

import x from '../assets/x.png'

function Canvas() {

  const cnt = [0, 0, 0, 0]
  const clocks = [clock1, clock2]
  const tables = [table1, table2]
  const lamps = [lamp1, lamp2]
  const sofas = [sofa1, sofa2]

  const [clock, setClock] = useState(0)
  const [table, setTable] = useState(0)
  const [sofa, setSofa] = useState(0)
  const [lamp, setLamp] = useState(0)

  const [buy, setBuy] = useState(["เก้าอี้", "โคมไฟ"])

  const divRef = useRef();

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

          <div className='w-[200px] h-[100%] bg-white rounded-md flex flex-col justify-between pb-3'>

            <div className='flex flex-col overflow-y-scroll'>
              {buy.map((key, value) => {
                return <div className='flex justify-between items-center'>
                  <div className='pl-3'>
                    {key}
                  </div>
                  <div className='flex justify-center items-center pr-4'>
                    <p className='mr-2'>1 ea</p>
                    {/* <svg width="20" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5Z" fill="#D9D9D9" />
                      <path d="M6.625 7.625H9.125L10.8 15.9938C10.8572 16.2815 11.0137 16.54 11.2422 16.7239C11.4707 16.9079 11.7567 17.0056 12.05 17H18.125C18.4183 17.0056 18.7043 16.9079 18.9328 16.7239C19.1613 16.54 19.3178 16.2815 19.375 15.9938L20.375 10.75H9.75M12.25 20.125C12.25 20.4702 11.9702 20.75 11.625 20.75C11.2798 20.75 11 20.4702 11 20.125C11 19.7798 11.2798 19.5 11.625 19.5C11.9702 19.5 12.25 19.7798 12.25 20.125ZM19.125 20.125C19.125 20.4702 18.8452 20.75 18.5 20.75C18.1548 20.75 17.875 20.4702 17.875 20.125C17.875 19.7798 18.1548 19.5 18.5 19.5C18.8452 19.5 19.125 19.7798 19.125 20.125Z" stroke="#1E1E1E" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}

                    <img src={x}  className='w-[12px] translate-y-[2px] hover:cursor-pointer'></img>
                    
                  </div>
                </div>
              })}
            </div>

            <div className='flex justify-center items-center '>
              <div className='bg-green-200 p-1 rounded-md'>
                <h1 className='font-[700] hover:cursor-pointer'>SUBMIT</h1>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div>
          <div ref={divRef} className="relative w-[100%]">
            <img className="rounded-md" alt="room" src={room}></img>
            
            <img src={clocks[clock]} className='w-[5%] absolute top-[25%] left-[50%] drop-shadow-lg'></img>

            <img src={tables[table]} className='w-[25%] absolute bottom-[10%] right-[5%] drop-shadow-lg'></img>

            <img src={lamps[lamp]} className='w-[25%] absolute top-[50%] left-[5%] drop-shadow-lg'></img>

            <img src={sofas[sofa]} className='w-[30%] absolute top-[55%] left-[20%] drop-shadow-lg' draggable='true'></img>

            <button className="p-1 rounded-md bg-white absolute bottom-[10px] right-[10px]" onClick={downloadImage}>
              Download this image
            </button>
          </div>
        </div>
      </div>

      <div className='h-[240px] w-[100%] flex items-center justify-around'>
        <div className='relative h-[161px] w-[142px] bg-gray-200 a1 rounded-[15px] hover:cursor-pointer' onClick={() => {setClock(0)}}>
          <svg onClick={() => {setBuy([...buy, 'นาฬิกา 1'])}} className='z-20 w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        <div className='relative h-[161px] w-[142px] bg-gray-200 a2 rounded-[15px] hover:cursor-pointer' onClick={() => {setClock(1)}}>
          <svg onClick={() => { setBuy([...buy, 'นาฬิกา 2']) }} className='z-20 w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='relative h-[161px] w-[142px] bg-gray-200 l1 rounded-[15px] hover:cursor-pointer' onClick={() => {setLamp(0)}}>
        <svg onClick={() => {setBuy([...buy, 'โคมไฟ 1'])}}className='z-20 w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='relative h-[161px] w-[142px] bg-gray-200 l2 rounded-[15px] hover:cursor-pointer' onClick={() => {setLamp(1)}}>
        <svg onClick={() => {setBuy([...buy, 'โคมไฟ 2'])}}className='z-20 w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='relative h-[161px] w-[142px] bg-gray-200 c1 rounded-[15px] hover:cursor-pointer'onClick={() => {setTable(0)}} >
        <svg onClick={() => {setBuy([...buy, 'โต๊ะ 1'])}}className='w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='relative h-[161px] w-[142px] bg-gray-200 c2 rounded-[15px] hover:cursor-pointer'onClick={() => {setTable(1)}}>
        <svg onClick={() => {setBuy([...buy, 'โต๊ะ 2'])}}className='w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='w-px h-[120px] bg-gray-200'></div>

        <div className='relative h-[161px] w-[142px] bg-gray-200 s1 rounded-[15px] hover:cursor-pointer'onClick={() => {setSofa(0)}}>
        <svg onClick={() => {setBuy([...buy, 'โซฟา 1'])}}className='w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='relative h-[161px] w-[142px] bg-gray-200 s2 rounded-[15px] hover:cursor-pointer'onClick={() => {setSofa(1)}}>
        <svg onClick={() => {setBuy([...buy, 'โซฟา 2'])}} className='w-[40px] top-0 right-[10px] absolute translate-y-[-30px]' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="59" fill="#354F2A" />
            <path d="M29.25 35.2083H38.25L44.28 64.7778C44.4858 65.7945 45.0493 66.7078 45.872 67.3578C46.6947 68.0078 47.7241 68.3531 48.78 68.3333H70.65C71.7059 68.3531 72.7353 68.0078 73.558 67.3578C74.3807 66.7078 74.9443 65.7945 75.15 64.7778L78.75 46.2499H40.5M49.5 79.3749C49.5 80.5945 48.4926 81.5833 47.25 81.5833C46.0074 81.5833 45 80.5945 45 79.3749C45 78.1553 46.0074 77.1666 47.25 77.1666C48.4926 77.1666 49.5 78.1553 49.5 79.3749ZM74.25 79.3749C74.25 80.5945 73.2426 81.5833 72 81.5833C70.7574 81.5833 69.75 80.5945 69.75 79.3749C69.75 78.1553 70.7574 77.1666 72 77.1666C73.2426 77.1666 74.25 78.1553 74.25 79.3749Z" stroke="#B3B3B3" stroke-width="2.88455" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Canvas