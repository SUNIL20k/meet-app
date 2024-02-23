import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";




const Navbar=()=>{
    return <div className="navbar">
              <h1>MEET APP</h1>
           <div className="nav-list">
              <ul>
                <Link className="link" to={"/"}><li className="list">Home</li></Link>
                <Link className="link" to={"/mymeet"}><li className="list">My Meet</li></Link>
                <Link className="link" to={"/addmeet"}><li className="list">Add Meet</li></Link>
              </ul> 
           </div>
    </div>
}
export default Navbar;