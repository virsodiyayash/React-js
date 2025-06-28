import React from 'react'
import { Data , Data1 } from '../App'
import { useContext } from "react"

const ComponentC = () => {

  const userName = useContext(Data)
  const age = useContext(Data1)

  return (
    <section>
    <h1>{userName}</h1>
    <p>{age}</p>
    </section>
  )
}

export default ComponentC