import { useRef , useState , useEffect } from "react";

import React from 'react'

const Timer = () => {

    const intervalRef = useRef(null)

    const [count , setCount] = useState(0)

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        } , 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    } , [])

  return (
    <div>
        <h1>Timer : {count}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer