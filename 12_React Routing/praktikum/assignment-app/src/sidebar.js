import React from "react";
import {Link} from 'react-router-dom'

function Sidebar() {
    return(
<>

            <div><h1>Home<Link to = "About/Home"/></h1></div>
            <div><h1>AboutApp<Link to = "About/AboutApp"/></h1></div>
            <div><h1>AboutAuthor<Link to = "About/AboutAuthor"/></h1></div>

</>



  );
}

export default Sidebar;
