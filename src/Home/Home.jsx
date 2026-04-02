import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
 
 const [movie,setMovie]=useState([])
  async function getMovies(params){
    let result =  await axios.get("https:/imdb.iamidotaryoutoo.com/search/q=action")
   setMovie(result.data.description);
  }


  useEffect=(() =>{
    getMovies()
  },[])


  return (<>
  <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Trending Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
{
  movie.Map((movie)=>{
      return<Movie/>
  })
}
    
    </div>
  </section>
 </>
  )
}
