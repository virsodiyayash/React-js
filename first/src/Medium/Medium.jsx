import React, { useState , useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function Medium({userName}) {

  console.log(userName);

    const [name , setName] = useState('');
    const [followers , setFollowers] = useState();
    const [following , setFollowing] = useState(0);
    const [avatar_url , setAvatar_url] = useState('');
    const [bio , setBio] = useState('');


    useEffect(() => {
        
        fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
            setName(data.name);
            setFollowers(data.followers);
            setFollowing(data.following);
            setAvatar_url(data.avatar_url);
            setBio(data.bio);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } , [userName])

  return (
    <div style={{
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#f8f9fa',
    }}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src= {avatar_url ? avatar_url :  "holder.js/100px180" }/>
      <Card.Body>
        <Card.Title style={{fontSize : '24px'}}>{name || 'Loading...'}</Card.Title>
        <div>
          <div style={{display:'flex' , fontSize : '18px'}}>
          <div>Followers : {followers || 'Loading'}</div>
          <div style={{marginLeft : 'auto'}}>Following : {following || 'Loading'}</div>
          </div>
          <div >about me : {bio}</div>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Medium;