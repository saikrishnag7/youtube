import React from 'react'
import { useEffect } from 'react'
import { youtubeapi } from '../utils/constants';
import {useState} from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
  const [videos, setvideos] =useState([]);

  useEffect(() =>{
    getVideos();
    // eslint-disable-next-line
  },[]);
  const getVideos = async() =>{
    const data = await fetch(youtubeapi);
    const json = await data.json();
    setvideos(json.items);
  }
  return (
    <div className ="flex flex-wrap">
    {videos.map(videos => (<Link to ={"/watch?v="+videos.id}><VideoCard  key = {videos.id} info = {videos} /></Link>))}
    </div>
  )
}

export default VideoContainer
