import React from 'react'
import logo from './../assets/images/logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
function Header() {
  return (
    <div class='flex items-center p-3'>
        <img src={logo} width={60} height={60}/>
        <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'> 
            <HiMagnifyingGlass/>
            <input type='text' placeholder='Search Games...' className='px-2 bg-transparent outline-none' />

        </div>
</div>
  )
}

export default Header