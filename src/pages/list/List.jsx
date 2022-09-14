import React from 'react'
import "./list.scss";
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';
import { Datatable } from './../../components/datatable/Datatable';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export const List = () => {
    const [position, setPosition] = React.useState('');

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <div className="list">
        <Sidebar />
        <div className="list--container">
            <Navbar/>
            <div className="top">
                <div className="add--container">
                    <h1>Your Users</h1>
                    <Link to="/users/new" style={{textDecoration:"none"}}>
                        <div className="add--user">Add New User</div>
                    </Link>
                </div>
            </div>

            <div className="bottom">
                <div className="user--table">
                    <div className="postion--list">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="supervisor-position-label">Position</InputLabel>
                                <Select
                                    labelId="supervisor-position-label"
                                    id="supervisor-position"
                                    value={position}
                                    label="Position"
                                    onChange={handleChange}
                                >
                                <MenuItem value={10}>HR</MenuItem>
                                <MenuItem value={20}>Helpdesk</MenuItem>
                                <MenuItem value={30}>Tech Support</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <Datatable/>
                </div>
            </div>
        </div>
    </div>
  );
}
