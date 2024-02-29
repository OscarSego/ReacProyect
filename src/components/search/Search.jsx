import React from 'react'

const Search = () => {
  return (
    <div className="flex items-center mr-10"> 
        <input
            type="text"
            placeholder="Buscar..."
            className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
            Buscar
        </button>
    </div>
  )
}

export default Search;
