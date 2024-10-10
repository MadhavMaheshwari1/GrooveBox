import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = ({ userCountry = 'IN' }) => { // Default market set to 'US'
    const [songs, setSongs] = useState([]);
    const clientId = '4b2bb1cd8b8f40bea956d7e12a81a493';
    const clientSecret = '746612a7fd064715926a8c2e26336013';

    const getAccessToken = async () => {
        const auth = btoa(`${clientId}:${clientSecret}`);

        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
        }
    };

    const fetchTopTracks = async () => {
        const accessToken = await getAccessToken();
        if (!accessToken) {
            console.error('No access token available.');
            return;
        }

        try {
            const response = await axios.get('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    market: userCountry,
                },
            });
            const playlistId = response.data.playlists.items[0].id; // Get the first playlist ID for the country

            const playlistResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            const topTracks = playlistResponse.data.tracks.items.slice(0, 5).map(item => item.track);
            setSongs(topTracks);
        } catch (error) {
            console.error('Error fetching top tracks:', error);
        }
    };

    useEffect(() => {
        fetchTopTracks();
    }, [userCountry]);

    return (
        <div className="slider-container">
            {/* <div className="slider">
                {songs.map((song) => (
                    <div className="carousel-item" key={song.id}>
                        <img src={song.album.images[0].url} alt={song.name} />
                        <div className="song-info">
                            <h3>{song.name}</h3>
                            <p>{song.artists.map(artist => artist.name).join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Slider;
