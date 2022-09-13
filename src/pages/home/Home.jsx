import React from 'react'
import "./home.scss"
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';
import { Widget } from './../../components/widget/Widget';
import { Tablelist } from './../../components/TableList/Tablelist';

export const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="home--container">
            <Navbar/>
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="position"/>
                <Widget type="notes"/>
            </div>
            <div className="list--container">
                <div className="list--title">USER LIST</div>
                <Tablelist/>
            </div>
        </div>
    </div>
  );
}
