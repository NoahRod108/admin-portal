import React, { useEffect, useState } from 'react'
import "./single.scss";
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';
import { Datatable } from './../../components/datatable/Datatable';
import { useLocation } from 'react-router-dom';


export const Single = (props) => {

    console.log(useLocation.state);
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
                    <h1 className="person--name">user1</h1>
                </div>
                <div className="person--details">
                  <span className="person--id">ID: 12345457</span>
                </div>
                <div className="person--details">
                  <span className="person--email">Email: email</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="edit">Edit</div>
            <h1 className="title">Positions</h1>
            <div className="positions">
                <div className="details">
                    <div className="position">Position: Tech Support</div>
                    <div className="superviosr">Supervisor: supervisor 1</div>
                </div>

                <div className="details">
                    <div className="position">Position: Help Desk</div>
                    <div className="superviosr">Supervisor: supervisor 2</div>
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
