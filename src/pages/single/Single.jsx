import React, { useEffect, useState } from 'react'
import "./single.scss";
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';
import { Datatable } from './../../components/datatable/Datatable';
import { useParams} from 'react-router-dom';
import { userRows } from '../../datasource';

export const Single = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const id = Number(params.userId);
    
    useEffect(() => {
        const singleUser = userRows.find(item => item.id === id);
        setUser(singleUser);
        
    },[user, id]);

  return (
    <div className="single">
      <Sidebar/>
      <div className="single--container">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="person">
              <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='person--image' />
              <div className="details">
                <div className="person--details">
                    <h1 className="person--name">{user.name}</h1>
                </div>
                <div className="person--details">
                  <span className="person--id">ID: {user.id}</span>
                </div>
                <div className="person--details">
                  <span className="person--email">Email: {user.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="edit">Edit</div>
            <h1 className="title">Positions</h1>
            <div className="positions">
                <div className="details">
                    <div className="position">Position: {user.position}</div>
                    <div className="superviosr">Supervisor: {user.supervisor}</div>
                </div>
            </div>
          </div>
        </div>

        <div className="bottom">
            <div className="users--table">
                <Datatable/>
            </div>
        </div>
      </div>
    </div>
  );
}
