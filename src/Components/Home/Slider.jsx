import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = ({ userCountry = 'IN' }) => {
    const [songs, setSongs] = useState([]);
    const clientId = '4b2bb1cd8b8f40bea956d7e12a81a493';
    const clientSecret = '746612a7fd064715926a8c2e26336013';
    const [startIndex, setStartIndex] = useState(0);

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

            const topTracks = playlistResponse.data.tracks.items.map(item => item.track);
            setSongs(topTracks);
        } catch (error) {
            console.error('Error fetching top tracks:', error);
        }
    };

    useEffect(() => {
        fetchTopTracks();
    }, [userCountry]);

    const rearrangeSongs = (index) => {
        let updatedSongs = [...songs];
        if (index <= 1) {
            // Remove last 2 elements and add them to the front
            const movedSongs = updatedSongs.splice(-2);
            updatedSongs = [...movedSongs, ...updatedSongs];
        } else if (index >= updatedSongs.length - 2) {
            // Remove first 2 elements and add them to the end
            const movedSongs = updatedSongs.splice(0, 2);
            updatedSongs = [...updatedSongs, ...movedSongs];
        }
        setSongs(updatedSongs);
    };

    const handleClick = (index) => {
        if (index <= 1) {
            setStartIndex(index);
        }
        else if (index > 1 && index < songs.length - 2) {
            setStartIndex(index - 2); // Update the start index for positioning
        }
        else if (index >= songs.length - 2) {
            setStartIndex((prev) => prev = prev + 2);
        }
        rearrangeSongs(index); // Call the function to rearrange the songs based on the index
    };

    return (
        <div className="slider-container md:ml-[20rem] ml-[3rem] md:mr-[2rem] mr-[2rem] mt-8">
            <div className="slider">
                {songs.map((song, index) => {
                    let dataPos = 0;
                    if (index === startIndex) dataPos = -2;
                    else if (index === 1 + startIndex) dataPos = -1;
                    else if (index === 2 + startIndex) dataPos = 0;
                    else if (index === 3 + startIndex) dataPos = 1;
                    else if (index === 4 + startIndex) dataPos = 2;
                    else dataPos = 3;
                    return (
                        <div
                            className="carousel-item transition-all duration-500"
                            data-pos={dataPos}
                            key={song.id}
                            onClick={() => handleClick(index)} // Click handler to change the active song
                        >
                            <img src={song.album.images[0].url} className='rounded-xl' alt={song.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
