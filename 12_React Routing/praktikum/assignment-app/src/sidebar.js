import React from "react";
import {Link} from 'react-router-dom'

function Sidebar() {
    return(

    <>
            <div><h1><Link to="/">Home</Link></h1></div>
            <div><h1><Link to="/About/AboutApp">AboutApp</Link></h1></div>
            <div><h1><Link to="/About/AboutAuthor">AboutAuthor</Link></h1></div>
    </>


  );
}

export default Sidebar;
