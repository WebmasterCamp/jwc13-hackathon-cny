import React from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function AR() {

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <div className='flex'>
      <div className='overflow-y-scroll w-[20%] h-screen bg-red-200'>
      </div>
      <Camera 
        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
      />

      <div>
        <img src='../assets/furnitures/vase.jpg'></img>
      </div>
    </div>
  )
}

export default AR
