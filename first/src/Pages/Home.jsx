import React, { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSearch = () => {
        if (userName.trim()) {
            navigate(`/user/${userName}`);
        }
        else {
            alert('Please enter valid userName');
        }
    };

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center' }}>Enter your Github name</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100vh',
                }}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                    }}>

                        <input
                            type='text'
                            placeholder='Enter Github Username'
                            value={userName}
                            onChange={handleInputChange}
                            style={{
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                            }}
                        />

                        <button
                            onClick={handleSearch}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: 'none',
                                marginBottom: '10px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;