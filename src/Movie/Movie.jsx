import React from 'react'

export default function Movie() {
  return (
    <div>
         <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
           <img src="https://cdn.myanimelist.net/images/anime/9/9453.jpg" alt="Naruto" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button class="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Naruto</h3>
          <p className="text-xs text-gray-400">220 eps • Ninja, Shounen</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 220</span>
      </div>
    </div>
  )
}
