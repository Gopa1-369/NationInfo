// import React, { useContext } from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

const Header = ({theme}) => {
  // const [isDark,setIsDark]=theme
  // const [isDark,setIsDark]=useContext(ThemeContext)
  const [isDark,setIsDark]=useTheme()

//this is not effective because we directlumanipulate DOM
  // if(isDark){
  //   document.body.classList.add('dark')
  // }else{
  //   document.body.classList.remove('dark')
  // }

console.log()
function toggleworld(){
  // document.body.classList.toggle('dark')
  setIsDark(!isDark)
 
  localStorage.setItem('isDarkMode',!isDark)
}

  


  return (
 
    <header className={`header-container ${isDark? 'dark':''}`}>
    
    <div className='header-content' >
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <p className="theme-changer" onClick={toggleworld}>
        <i className={`fa-solid fa-${isDark ? 'sun' :'moon'}`}/>
        &nbsp;&nbsp;{isDark ? 'Light': 'Dark'} Mode
      </p>
    </div>
  </header>

  )
}

export default Header