import { createContext } from "react"

import ComponentA from "./components/ComponentA"
import ComponentC from "./components/ComponentC"

export const Data = createContext()
export const Data1 = createContext()

function App() {

  const name = "Yash"
  const age = 22

  return <div>
    <Data.Provider value={name}>
      <Data1.Provider value={{age}}>
          <ComponentA />
      </Data1.Provider>
    </Data.Provider>
  </div>
}

export default App
