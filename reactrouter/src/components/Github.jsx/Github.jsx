import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/virsodiyayash')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    } , [])

  return (
    <>
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'> Github followers : {data.followers}</div>
    <img src={data.avatar_url} alt='Git Picture' width={300} className='mx-auto'/>
    </>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const respone = await fetch('https://api.github.com/users/virsodiyayash')
//     return respone.json()
// }
