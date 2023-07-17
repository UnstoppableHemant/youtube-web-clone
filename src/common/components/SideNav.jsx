import {GoHomeFill,GoHistory,GoTrophy} from 'react-icons/go'
import {GiHanger} from 'react-icons/gi'
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineLocalFireDepartment,MdMovieCreation,MdOutlineLightbulb} from 'react-icons/md'
import {PiUserCircleThin,PiMusicNote} from 'react-icons/pi'
import {IoBagHandleOutline,IoNewspaperOutline} from 'react-icons/io5'
import {CiStreamOn} from 'react-icons/ci'
import {SiYoutubegaming} from 'react-icons/si'
import ytshorts from '../../assets/img/yt-shorts.png'

const SideNav = () => {
  return (
    <div className='divide-y divide-[#F0F0F0] w-52 overflow-y-scroll h-screen'>
        <div className='p-2 text-[0.9rem]'>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><GoHomeFill size={20}/>Home</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><img className='w-[20px]' src={ytshorts}/>Shorts</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><MdOutlineSubscriptions size={20}/>Subscriptions</div>
        </div>
        <div className='p-2 text-[0.9rem]'>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><MdOutlineVideoLibrary size={20}/>Library</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><GoHistory size={20}/>History</div>
        </div>
        <div className='p-2 text-xs'>
            <div className='flex gap-6 px-5 py-2 items-center'><p>Sign in to like videos, comment, and subscribe.</p></div>
            <div className='flex items-center gap-2 w-24 text-[#065FD4] hover:bg-[#DEF1FF] mx-5 px-2 py-1 rounded-full border border-[#F0F0F0] hover:border-[#DEF1FF]'>
                <PiUserCircleThin size={26} />
                <span className='w-14 font-semibold'>Sign in</span>
            </div>
        </div>
        <div className='p-2 text-[0.85rem]'>
            <div className='px-5 py-2 text-[1rem]'>Explore</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><MdOutlineLocalFireDepartment size={20}/>Trending</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><IoBagHandleOutline size={20}/>Shopping</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><PiMusicNote size={20}/>Music</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><MdMovieCreation size={20}/>Movie</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><CiStreamOn size={20}/>Live</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><SiYoutubegaming size={20}/>Gaming</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><IoNewspaperOutline size={20}/>News</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><GoTrophy size={20}/>Sports</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><MdOutlineLightbulb size={20}/>Learning</div>
            <div className='flex gap-6 px-5 py-2 items-center hover:bg-[#F0F0F0] hover:rounded-lg'><GiHanger size={20}/>Fashion & Beauty</div>
        </div>
    </div>
  )
}

export default SideNav