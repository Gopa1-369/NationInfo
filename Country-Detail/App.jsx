
import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext.js'

const App = () => {
  // const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    //we use it in conte file
    // <ThemeContext.Provider value={[isDark,setIsDark]}>
   
     <ThemeProvider>

    {/* <Header theme={[isDark,setIsDark]}/> */}
    <Header />
    {/* <Outlet  context={[isDark,setIsDark]}/> */}
    <Outlet/>

  
  
    </ThemeProvider>
    // {/* </ThemeContext.Provider> */}
  )
}

export default App