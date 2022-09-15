import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


export const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <Brightness6Icon className='mode--switch' onClick={ () => dispatch({type:"toggle"})}/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}
