import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Logo</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <h4 className="title">MAIN</h4>
                <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <h4 className="title">USER TABLES</h4>
                <li><PeopleAltIcon className='icon'/><span>Users</span></li>
                <h4 className="title">OTHER</h4>
                <li><SettingsIcon className='icon'/><span>Settings</span></li>
                <li><LogoutIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="mode"></div>
            <div className="mode"></div>
        </div>
    </div>
  )
}
