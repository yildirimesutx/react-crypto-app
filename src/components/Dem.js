import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dem = () => {

const [coin, setCoin] = useState([]) 

 const getCoin = ()=> axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 .then(res=>{
    setCoin(res.data)
    // console.log(res.data[0].name)
 })  

// useEffect(() => {
//    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//    .then(response => response.json())
//    .then( response=> setCoin(response))

  
// }, [])


// useEffect(() =>{

// axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
// .then(response => setCoin(response.data))
// .catch(error => console.log({error}));
// }, [])


useEffect(() => {
  getCoin()
}, [])







// console.log('response:',coin);


  return (
    <div>
<h1>fech</h1>
 
 {
   coin.map(coins=>{
     return (<div> 
         <img src={coins.image} alt="" style={{width :'20px'}} />
         {coins.name}
         <hr />
     </div>
   )})
 }
 

    </div>
  )
}

export default Dem