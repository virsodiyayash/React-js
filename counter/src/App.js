import {useState} from 'react';
import './App.css';

function App() {
  const [counter , setCounter]= useState(5);
  // let counter = 5;

  const addValue = () => {
    if(counter < 20 ){

      //This function increase the value by only one and in this method all the counter variable is same;
      //That's why when you click increase method then answer when click the button value increase by only one;
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      //In this method with callback function the click of one butto increase the value by 4;
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
    console.log(counter);
    
  }

  const decValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1);
    }
    console.log(counter);
  }

  return (
   <>

    <h1 className='heading1'>My Counter</h1>
    <h2 className='heading2'>Counter value : {counter}</h2>

    <button className='increase' onClick={addValue}>Increase value (+)</button>
    <button className='decrease' onClick={decValue}>Decease value (-)</button>

   </>
  );
}

export default App;
