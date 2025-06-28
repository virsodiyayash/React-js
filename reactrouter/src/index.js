import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github.jsx/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element : <Home />
//       },
//       {
//         path: "about",
//         element : <About />
//       },
//       {
//         path: "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>  
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="github" element={<Github />} />
       
      </Route>
      </Routes> 
    </BrowserRouter>
);


// loader={githubInfoLoader}