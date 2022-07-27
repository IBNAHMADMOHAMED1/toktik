import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video) => (
          <VideoCard key={video._id} post={video} isShowingOnHome />
        ))
      ) : (
          <NoResults text='No videos found' />
      )}

    </div>
  );
};


export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/post/')
  return { props: { videos: res.data } }
}
  

export default Home
