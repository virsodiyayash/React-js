import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// https://api.github.com/users/virsodiyayash

export default function Header({userName}) {

  const [name , setName] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      setName(data.name);
    })
    .catch((error) => console.error('Error fetching data : ' , error));
  } , [userName])

  return (
    <>
        <h1 className='text-center'>Hello from {name}</h1>
    </>
  )
}
