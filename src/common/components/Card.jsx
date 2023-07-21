import React from 'react'
import { VideoData } from '../../app/data/YouTubeData'

const Card = () => {
  return (
    <div className='mt-24 mx-10 mb-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {VideoData.map((item)=>{
            // var viewCount = item.videoViews;
            // if(viewCount>=1&&viewCount<1000)viewCount=viewCount;
            // if(viewCount>=1000&&viewCount<100000)viewCount=(viewCount/1000).toFixed(1)+"K";
            // if(viewCount>=100000&&viewCount<10000000)viewCount=(viewCount/100000).toFixed(1)+"M";
            // console.log(viewCount);
            return(
                <div className='p-2'>
                    <video className='rounded-lg' autoplay poster={item.videoThumbnail}>
                        <source src={item.videoLink}></source>
                    </video>
                    <div className='pt-3 flex gap-2'>
                        <img className='w-8 h-8 rounded-full' src={item.channelImage} alt='channel-image'/>
                        <div>
                            <p className='text-[0.9rem] font-semibold' title={item.videoTitle}>
                                {item.videoTitle.length >=65?item.videoTitle.substr(0,65)+"...":item.videoTitle}
                            </p>
                            <p className='text-xs m-0'>{item.channelName}</p>
                            <p className='text-xs m-0'>{}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Card