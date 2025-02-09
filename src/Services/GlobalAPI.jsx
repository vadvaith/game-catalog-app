import axios from "axios"
const key="7773b86f91694cb7a0761dfd2ab37467"
const axiosCreate=axios.create({

    baseURL:"https://api.rawg.io/api"
})

const getGenre=axiosCreate.get('/genres?key='+key)
const getGames=axiosCreate.get('/games?key='+key)
export default{
    getGenre,getGames
}