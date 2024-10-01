import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  
  const getData = () => {
    axios.get('/api?keywords=junior-software-developer&location=remote&distancefromlocation=15')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <div>
        <button onClick={getData}>get data</button>
      </div>
    </>
  )
}

export default App
