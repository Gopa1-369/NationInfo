import React, { useContext, useEffect } from 'react'
import Header from './Header'
import '../App.css'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme.js'
import { useWindowSize } from '../hooks/useWindowSize.js'

const Home = () => {
  
    const [query ,setQuery]=useState('')
    // const [isDark]=useOutletContext()
    // const [isDark] = useContext(ThemeContext)
     const [isDark]=useTheme()

//custom hook create
    // const [windowSize, setWindowSize]=useState({width:window.innerWidth,height:window.innerHeight})
   
    // useEffect(()=>{
    //   window.addEventListener('resize',()=>{
    //     setWindowSize({
    //       width:window.innerWidth,
    //       height:window.innerHeight
    //     })
    //   })
    // },[])

      const windowSize =useWindowSize()
    
  return (
    <>
   
    <main className={`${isDark? 'dark' : ''}`}>
    <div className='search-filter-container'>
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setQuery={setQuery}/>
    </div>
    <div style={{textAlign:'center'}}>{windowSize.width}x{windowSize.height}</div>
    <CountriesList query={query}/>
    </main>
    </>
  )
  
}

export default Home