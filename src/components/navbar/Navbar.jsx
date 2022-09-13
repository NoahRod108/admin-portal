import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}
