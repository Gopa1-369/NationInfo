import React from 'react'
import './CountriesListShimmer.css'


const CountriesListShimmer = () => {

    // new Array(10).fill(undefined).map((eL)=>{
    //     console.log(eL)
    // })


   const mapped= Array.from({length:10}).map((_,index)=>{
       return <div key={index} className="country-card shimmer-card "></div>
    })
  return (
    <div className='countries-container'>
{
    mapped
}
    </div>
  )
}

export default CountriesListShimmer