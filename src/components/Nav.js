import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav
            style={{
                display: "flex",
                justifyContent: 'space-around',
                background: 'gray',
                alignItems: 'center',
                minHeight: '10vh',
                color: 'white'
            }}
       >
           <div>
                  <h1>Soccer Highlights</h1>
            </div>

           <ul style={{
               width:'30%',
               display: "flex",
               justifyContent: 'space-around',
               alignItems: 'center',
               listStyle: 'none'
           }}>
               <Link to='/'>
                    <li>Home</li>
               </Link>

               <Link to='/horse-news'>
                    <li>Horse News</li>
               </Link>
           </ul>
       </nav>
    )
}

export default Nav;