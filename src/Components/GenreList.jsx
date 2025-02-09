import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function GenreList({setGenresId}) {

    const [genreList,setgenreList]=useState([])
    const [activeIndex,setactiveIndex]=useState([])
    useEffect(()=>{
        getGenre();
    },[])
    const getGenre=()=>{
        GlobalAPI.getGenre.then((resp)=>{
            console.log(resp.data.results)
            setgenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold'>Genres</h2>
        {genreList.map((item,index)=>(

            <div 
            onClick={()=>{setactiveIndex(index);setGenresId(item.id)}}
            className={'flex gap-2 items-center mb-2 hover:bg-gray-200 p-2 rounded-lg ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}'}>
                <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300'/>
                <h3 className='text-[19px] group-hover:font-bold transition-all ease-out'> {item.name}</h3>
                </div>

        ))}

    </div>
  )
}

export default GenreList