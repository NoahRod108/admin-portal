import React from 'react'
import "./widget.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from 'react-router-dom';


export const Widget = ({ type }) => {
    let data;

    //temp
    const amount = 25;

    switch(type){
        case "user":
            data={
                title: "USERS",
                linkText: "SEE ALL USERS",
                link: "/users",
                icon: <PersonOutlineIcon className='icon' style={{color: "rgb(102, 0, 204)", backgroundColor:"rgb(102, 0, 204, .2)", borderRadius:"50%"}}/>,

            };
            break;
        case "position":
            data={
                title: "JOB POSITION",
                linkText: "SEE ALL POSITIONS",
                link: "/users",
                icon: <WorkOutlineIcon className='icon' style={{color: "rgb(56, 30, 14)", backgroundColor:"rgb(56, 30, 14, .2)", borderRadius:"50%"}}/>,

            };
            break;
        case "notes":
            data={
                title: "NOTES",
                linkText: "SEE ALL NOTES",
                link: "/notes",
                icon: <NotesIcon className='icon' style={{color: "rgb(255, 204, 0)", backgroundColor:"rgb(255, 204, 0, .2)", borderRadius:"50%"}}/>,

            };
            break;
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{amount}</div>
            <Link to={data.link} style={{textDecoration:"none"}}>
                <div className="link">{data.linkText}</div>
            </Link>
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}
