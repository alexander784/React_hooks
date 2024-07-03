import React, { Component, useContext } from 'react';
import { ThemeContext} from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';



function Navbar () {
  const{ isLightTheme, light, dark } = useContext(ThemeContext);
  const{isAuthenticated, toggleAuth} = useContext(AuthContext);
  // default color = light;
  // if true, theme = light
  // if false = dark
  const theme = isLightTheme ? light : dark;
  return (
    // Output the theme 
    // Colorize the nav
    <nav style={{ background: theme.ui, color:theme.syntax}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
          {
            isAuthenticated ? "Logged in" : "Logged out"
          }
        </div>
        <ul>
            <li>About</li>
            <li>Home</li>
            <li>Contact </li>
        </ul>
        
    </nav>
  )
}


export default Navbar