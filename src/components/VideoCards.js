import React from 'react'

const VideoCards = ({info}) => {
    console.log("in videocards");
    console.log(info);

    //snippet and statistics come from info
     const{snippet,statistics}= info;
    //and these come from snippet=fetched url
   const{channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-72 h-50 shadow-lg'>
         <img className='rounded-lg' alt="thumbnail" src ={thumbnails.medium.url}/>
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
     </div>
   )
}


export default VideoCards