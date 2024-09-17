import {useState} from 'react';
import './App.css';

function App() {
  let [counter , setCounter]= useState(5);
  // let counter = 5;

  const addValue = () => {
    if(counter < 20 ){
      counter = counter + 1;
      setCounter(counter);
    }
    console.log(counter);
    
  }

  const decValue = () => {
    if(counter > 0 ){
      counter = counter - 1;
      setCounter(counter);
    }
    console.log(counter);
  }

  return (
   <>

    <h1 className='heading1'>My Counter</h1>
    <h2 className='heading2'>Counter value : {counter}</h2>

    <button className='increase' onClick={addValue}>Increase value (+)</button>
    <button className='decrease' onClick={decValue}>Decease value (+)</button>

   </>
  );
}

export default App;
