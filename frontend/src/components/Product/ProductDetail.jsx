import React from 'react'

const ProductDetail = () => {
  return (
    <>
      <div className='grid grid-cols-11'>
        <div className='col-span-1 border-8'>
          <div className='h-28 border-8 border-red-500 flex items-center justify-center'>s</div>
          <div className='h-28 border-8 border-red-500 flex items-center justify-center'>s</div>
          <div className='h-28 border-8 border-red-500 flex items-center justify-center'>s</div>
          <div className='h-28 border-8 border-red-500 flex items-center justify-center'>s</div>
        </div>
        <div className='col-span-3 border-8'>
          <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/381782526/LP/TZ/UU/63369146/mens-pant-coat.jpg" alt="" sizes="" srcset="" />
        </div>
        <div className='col-span-4 border-8'>
          <div className='flex flex-col p-3'>
            <div className='flex justify-between rounded-lg p-1 bg-red-500 text-white font-bold'>Super Deal <label>Date: 10:00:11 PM</label></div>
            <div className='flex'><h1 className='text-3xl font-bold flex'>PKR</h1><label className='text-3xl'>1,147</label><del className='flex flex-col justify-end pl-1'>PKR1234</del><label className='text-red-500 flex flex-col justify-end pl-1'>50% off</label></div>
            <div className='text-gray-400'>Price shown before tax丨Extra 2% off with coins</div>
            <div className='font-bold'>L900 Pro MAX GPS Drone 4K Professional Dual Camera 5G Wifi 360° Obstacle Avoidance Brushless Foldable Quadcopter Distance 1.2KM</div>
          </div>
        </div>
        <div className='col-span-3 border-8'>a</div>
      </div>
    </>
  )
}

export default ProductDetail