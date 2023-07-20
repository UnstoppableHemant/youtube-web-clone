import { FiMenu } from 'react-icons/fi'
import { BsYoutube,BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardVoice } from 'react-icons/md'
import { PiUserCircleThin } from 'react-icons/pi'

const Header = () => {
    return (
        <div className='flex p-2 justify-between fixed bg-white w-full top-0 flex-row'>
            <div className='mx-2 my-0 flex gap-2'>
                <div><FiMenu size={36} fontWeight={100} className='p-2 hover:bg-[#E5E5E5] hover:rounded-full' /></div>
                <div className='flex'>
                    <BsYoutube size={40} className='py-2 text-[#FF0000]' />
                    <span className='py-2'><strong>YouTube</strong><sup className='px-1'>IN</sup></span>
                </div>
            </div>
            <div className='flex w-[730px] shrink gap-4 items-center h-[40px]'>
                <div className='flex items-center ml-10 border border-[#F0F0F0] rounded-full w-full md:flex hidden'>
                    <div className='pl-3 w-full'><input type="search" className='p-1 pr-0 outline-none border-0 shrink w-full' placeholder='Search' /></div>
                    <div className='bg-[#F0F0F0] h-full rounded-r-full py-2 px-4 items-center'><AiOutlineSearch size={26} /></div>
                    <div className='md:hidden block'><AiOutlineSearch size={26} /></div>
                </div>
                <div className='flex items-center ml-10 w-full md:hidden block'>
                    <div className='ms-auto'><AiOutlineSearch size={26} /></div>
                </div>
                <div>
                    <MdKeyboardVoice size={36} className='p-2 bg-[#F0F0F0] hover:bg-[#E5E5E5] rounded-full' />
                </div>
            </div>
            <div className='flex justify-between h-[40px]'>
                <div className='p-2'><BsThreeDotsVertical size={20}/></div>
                <div className='flex items-center justify-between text-center text-[#065FD4] hover:bg-[#DEF1FF] px-2 py-0 rounded-full border border-[#F0F0F0] hover:border-[#DEF1FF]'>
                    <PiUserCircleThin size={22} />
                    <span className='w-14 font-semibold text-xs'>Sign in</span>
                </div>
            </div>
        </div>
    )
}

export default Header