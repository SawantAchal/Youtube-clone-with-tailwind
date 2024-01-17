import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
import { BsFillCheckCircleFill } from "react-icons/bs";
import {abbreviateNumber} from 'js-abbreviation-number';

const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url}/>
          {video.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds}/>
          )}
        </div>
        <div className='flex text-white mt-3 '>
          <div className='flex items-center'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url}/>
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white flex items-center'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type=== "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill  className='text-white/[0.5] text-[12px] ml-1'/>
              )}
            </span>
            <div className='flex text-[12px] font-semibold text-white truncate overflow-hidden'>
                <span>{`${abbreviateNumber(video?.stats?.views ,2)}  views`}</span>
                <span className='flex leading-none font-bold relative -top-8 mx-1 text-[24px]'>
                  .
                </span>
                <span className="truncate">
                  {video?.publishedTimeText}
                </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard