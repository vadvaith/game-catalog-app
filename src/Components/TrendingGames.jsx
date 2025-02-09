import React from 'react'

function TrendingGames({gameList}) {
  return (
    <div  className='mt-5'><h2 className='text-[30px] font-bold'>Trending Games</h2>

    <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
{gameList.map((item,index)=>index<4&&(
    <div className='bg-[#76a8f75e] rounded-lg hover:scale-110 transition:all duration-300 ease-in-out'>

        <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover'/>
        <h2 className='p-2 h-[60px] font-bold'>{item.name}</h2>
              </div>

))}

    </div>
    </div>
  )
}

export default TrendingGames