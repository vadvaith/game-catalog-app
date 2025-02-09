import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalAPI from '../Services/GlobalAPI'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenre from '../Components/GamesByGenre';
function Home() {
    const [allgames,setallgames]=useState();
    useEffect(()=>{getallgames();},[])
    const getallgames=()=>{
        GlobalAPI.getGames.then((resp)=>{

            console.log(resp.data.results)
            setallgames(resp.data.results)
            setGamesbyGenre(resp.data.results)

        })
    }

    const getGamebyGenre=(id)=>{
      GlobalAPI.getGamebyGenre(4).then((resp)=>{

        console.log()
      })
    }
  return (
    <div className='grid grid-cols-4 p-8'>
        
        <GenreList genresId={(genresId)=>getGenre(setGenresId)}/>
        <div className='col-span-4 md:col-span-3 h-full'>
          {allgames?.length>0?
          <div>
          <Banner gameBanner={allgames[0]} />
          <TrendingGames gameList={allgames}/>
          <GamesByGenre gameList={allgames}/>
          </div>
          :null}
          
        </div>

    </div>
  )
}

export default Home
