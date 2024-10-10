import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = () => {
    const [songs, setSongs] = useState([]);
    const visibleItems = 5; // Number of items to display at once
    const clientId = '4b2bb1cd8b8f40bea956d7e12a81a493'; // Replace with your Spotify client ID
    const clientSecret = '746612a7fd064715926a8c2e26336013'; // Replace with your Spotify client secret

    // Function to get the access token using Client Credentials flow
    const getAccessToken = async () => {
        // Encode clientId and clientSecret to Base64
        const auth = btoa(`${clientId}:${clientSecret}`);

        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', null, {
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    grant_type: 'client_credentials',
                },
            });
            console.log("Access Token: ", response.data.access_token);
            return response.data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
        }
    };

    // Function to fetch top tracks from Spotify
    const fetchTopTracks = async () => {
        const accessToken = await getAccessToken();

        try {
            const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    limit: 10, // Number of top tracks to fetch
                },
            });
            setSongs(response.data.tracks);
        } catch (error) {
            console.error('Error fetching top tracks:', error);
        }
    };

    // Fetch top tracks on component mount
    useEffect(() => {
        fetchTopTracks();
    }, []);

    return (
        <div className="slider-container">
            <div className="slider">
                {songs.slice(0, visibleItems).map((song) => (
                    <div className="carousel-item" key={song.id}>
                        <img src={song.album.images[0].url} alt={song.name} />
                        <div className="song-info">
                            <h3>{song.name}</h3>
                            <p>{song.artists.map(artist => artist.name).join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
