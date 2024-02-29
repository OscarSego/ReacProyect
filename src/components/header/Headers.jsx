import React from 'react'
import logo from '../../assets/logo.png'
import Navigation from '../navigation/Navigation';
import Search from '../search/Search';
import LogOut from '../logOut/LogOut';

const Headers = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 mr-2" /> 
        <h1 className="text-2xl font-bold mr-10">Mi Sitio Web</h1> 
        <Navigation />
        <LogOut/>
      </div>
        <Search/>
    </header>
  )
}

export default Headers;
