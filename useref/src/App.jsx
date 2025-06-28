import { useRef } from "react"

function App() {

  const inputElement = useRef(null);
  
  const focusInput = () => {
    inputElement.current.focus()
    inputElement.current.value = "Yash"
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => {focusInput()}}>Focus & write Yash</button>
    </>
  )
}

export default App
