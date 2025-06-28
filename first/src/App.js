import { BrowserRouter , Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import UserDetails from './Pages/UserDeatils';

function App() {

  return(
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/user/:userName' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
 
}

export default App;
