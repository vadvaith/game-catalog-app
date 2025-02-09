import React, { useEffect } from 'react'

function Banner({gameBanner}) {

    useEffect(()=>{
        console.log("gameBanner",gameBanner)
    },[])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-3 bg-gradient-to-t from-slate-900 to-transparent w-full'><h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2></div>
<img src={gameBanner.background_image} className='md: h-[320px] w-full object-cover rounded-lg'/>

    </div>
  )
}

export default Banner