import React from 'react'

 const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className ="p-2 w-80 m-2 rounded-md hover:rounded-none shadow-lg">
    <img alt ="Thumb" className = "rounded-lg hover:rounded-none" src ={thumbnails.medium.url}/>
    <ul>
       <li className ="font-bold p-1">{title}</li>
       <li className =" p-1" >{channelTitle}</li>
       <li className =" p-1">{statistics.viewCount}</li>

      
    </ul>
    </div>
  )
}

export default VideoCard