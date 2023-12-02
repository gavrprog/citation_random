'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountVisitors = () => {

  const initialValue = {
    new: 0,
    old: 0
  }

  const [count, setCount] = useState(initialValue)

  let visitor = 'new'
  localStorage.visited ? visitor = 'old' : localStorage.visited = true
  
  async function fetchData() {
    const res =  await axios.post('/api/' + visitor, {count: visitor})
    console.log('answer from server is: ', res.data)
    setCount({...count, 
      new: res.data.new, 
      old: res.data.old})
  }

    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div>
        <p >new:{' '}{count.new}</p>
        <p >revisit:{' '}{count.old}</p>
    </div>
  )
}

export default CountVisitors