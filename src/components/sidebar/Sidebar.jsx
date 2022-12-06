import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/admin-portal" style={{textDecoration:"none"}}>
                <span className="logo">User Management Portal</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <h4 className="title">MAIN</h4>
                <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
                <Link to="/admin-portal" style={{textDecoration:"none"}}>
                    <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                </Link>
                <h4 className="title">USER TABLES</h4>
                <Link to="/admin-portal/users" style={{textDecoration:"none"}}>
                    <li><PeopleAltIcon className='icon'/><span>Users</span></li>
                </Link>
                <h4 className="title">OTHER</h4>
                <li><SettingsIcon className='icon'/><span>Settings</span></li>
                <li><LogoutIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
    </div>
  )
}
