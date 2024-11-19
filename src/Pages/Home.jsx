import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../Contexts/UserContext';
import axios from 'axios';

const Home = () => {

  const genreList = ['Romance', 'Chill', 'Party', 'Sad', 'Work Out', 'Sleep', 'Soul', 'Study', 'Pop', 'Metalcore', 'Kids', 'Acoustic', 'Club', 'Groove'];
  const [featuredMusic, setFeaturedMusic] = useState([]);
  const { user, loading, market } = useContext(UserContext);

  const getFeaturedMusic = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const playlistId = market === 'IN' ? '37i9dQZEVXbLZ52XmnySJg' : '37i9dQZEVXbMDoHDwVN2tF';
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const tracks = response.data.items.map((item) => ({
        name: item.track.name,
        artist: item.track.artists.map((artist) => artist.name).join(', '),
        album: item.track.album.name,
        albumImageUrl: item.track.album.images[0]?.url, // Get the album's first image
      }));

      setFeaturedMusic(tracks);

      // const responseTracks = await axios.get(tracksURL, {
      //   headers: {
      //     'Authorization': `Bearer ${accessToken}`,
      //   },
      // })
      // console.log(responseTracks);
      // const albumImageUrl = responseTracks.data.items[0].track.album.images[0].url;
      // console.log(albumImageUrl);

    } catch (error) {
      console.log(error);
    }
  }

  console.log(featuredMusic);


  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getFeaturedMusic();
    }
  }, [loading]);

  return (
    <motion.div
      className="max-w-[1880px] mx-auto lg:ps-[150px] ps-[30px] md:py-[140px] py-[120px] relative h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className="w-full h-full sm:pe-[38px] pe-[40px] flex flex-col gap-8">
        <div className="flex text-white gap-4 text-2xl overflow-x-scroll relative rounded-xl">
          {
            genreList.map((genre, index) => (
              <button key={index} className="py-2 px-3 glass rounded-xl flex w-[140px] justify-center items-center whitespace-nowrap cursor-pointer">{genre}</button>
            ))
          }
          <div className="absolute w-[40px] h-[40px] right-0 z-40 rounded-full bg-cyan-500 filter blur-xl"></div>
          <div className="absolute w-[40px] h-[40px] right-4 z-40 rounded-full bg-pink-400 filter blur-xl"></div>
        </div>
        <h1 className='text-white md:text-5xl text-3xl font-bold ml-1'>Welcome, {user.display_name}</h1>
        <div className="flex overflow-x-hidden gap-8 mt-2 ml-1">
          {
            featuredMusic.map((value, index) => (
              <div className="flex flex-col text-white" key={index}>
                <div key={index}><img src={value.albumImageUrl} alt="Top 50" className='md:min-w-[300px] min-w-[200px] md:h-[300px] h-[200px] rounded-xl cursor-pointer' /></div>
                <div className='flex w-full justify-center mt-4 md:text-xl text-md font-semibold'>{value.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
