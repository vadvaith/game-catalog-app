import React from 'react'

function GamesByGenre({gameList}) {
  return (

    <div><h2 className='font-bold text-[30px]'>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-6'>
{gameList.map((item)=>
(
    <div className=' bg-gray-200 p-2 rounded-lg pb-15 h-full hover:scale-110 transition-all ease-in-out'>
        <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
        <h2 className='text-[20px] font-bold'>{item.name}<span className='p-2 rounded-md ml-2 bg-green-100 text-green-700 text-[13px] font-bold'>           {item.metacritic}</span></h2>
        
        </div>
)
)}
</div>
    </div>
  )
}

export default GamesByGenre