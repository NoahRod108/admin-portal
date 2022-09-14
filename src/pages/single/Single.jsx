import React from 'react'
import "./single.scss";
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';

export const Single = () => {
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
                <h1 className="person--name">user1</h1>
                <div className="person--details">
                  <span className="person--id">12345457</span>
                </div>
                <div className="person--details">
                  <span className="person--email">email</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <h1 className="title">Positions</h1>
            <div className="position--info"></div>
          </div>
        </div>

        <div className="bottom">

        </div>
      </div>
    </div>
  );
}
