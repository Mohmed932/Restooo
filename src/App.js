/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [active,setactive] = useState(false);
  const [data,setdata] = useState('');
  const [result,setresult] = useState([]);
  // const keys = ['country','oneCasePerPeople','oneDeathPerPeople','todayDeaths','recovered','todayRecovered','active']
  useEffect(()=>{
    const Searching = async()=>{
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(req=>req.json())
      .then(res=>setresult(res))
    }
    Searching();
  },[data])
  return (
    <div className='container'>
      <input type='text' placeholder='Search By Country ' className={active?'search  active':'search'} onChange={(e)=>setdata(e.target.value)} onClick={()=>setactive(!active)}/>
      <div className='data'>
      <div className='maindata'>
          <span>Country</span>
          <span>OneCasePerPeople</span> 
          <span>OneDeathPerPeople</span>
          <span>TodayDeaths</span>
          <span>Recovered</span>
          <span>TodayRecovered</span>
          <span>Active</span>
      </div>
        {result.filter(val=>{
          if(result===''){
            return val
          }else if(val.country.toLocaleLowerCase().includes(data.toLocaleLowerCase())){
            return val
          }
        }).map(({country,oneCasePerPeople,oneDeathPerPeople,todayDeaths,recovered,todayRecovered,active,id})=>(
          <div className='alldata' key={id}>
            <span>{country}</span>
            <span>{oneCasePerPeople}</span>
            <span>{oneDeathPerPeople}</span>
            <span>{todayDeaths}</span>
            <span>{recovered}</span>
            <span>{todayRecovered}</span>
            <span>{active}</span>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default App