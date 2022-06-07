import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dem = () => {

const [coin, setCoin] = useState() 

 const getCoin = ()=> axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 .then(res=>{
    setCoin(res.data[0].name)
    // console.log(res.data[0].name)
 })   
useEffect(() => {
    // axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //  .then(res=>{
    //     setCoin(res.data[0].name)
    //     // console.log(res.data)
    //  }).catch(error=>console.log(error))

    getCoin()
}, [])


  return (
    <div>


    {coin}

    </div>
  )
}

export default Dem