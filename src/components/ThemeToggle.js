import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle () {
    // const themeContext = useContext(ThemeContext);
    const { toggleTheme} = useContext(ThemeContext);
    
  return (
    <button onClick={toggleTheme}>Toggle the Button</button>
  )
}

export default ThemeToggle;