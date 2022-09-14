import React from 'react'
import "./new.scss"
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';

export const New = () => {
  return (
    <div className="new">
        <Sidebar/>
        <div className="new--container">
            <Navbar/>
            <div className="top">
                <h1>Add User</h1>
            </div>

            <div className="bottom">
                <div className="left">Left</div>
                <div className="right">
                    <form action="">
                        <div className="form--input">
                            <label htmlFor="id">User ID</label>
                            <input type="text" name='id' id='id' placeholder='1234'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' placeholder='Name'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email' placeholder='Email'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="supervisor">Supervisor</label>
                            <input type="text" name='supervisor' id='supervisor' placeholder='Supervisor'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="position">Position</label>
                            <input type="text" name='position' id='position' placeholder='Position'/>
                        </div>
                        <button>Insert</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
