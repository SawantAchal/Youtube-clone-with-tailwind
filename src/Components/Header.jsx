import React, { useContext, useState } from 'react'
import {Context} from '../Context/contextApi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from '../Assets/profile.png'
import logo from '../Assets/logo.png'

const Header = () => {
  const [searchQuery , setSearchQuery] = useState('')

  //creating context . fetching value from context.js file 
  const {loading , mobileMenu , setMobileMenu} = useContext(Context)

  const navigate = useNavigate() ;

  const searchQueryHandler = (e) => {
    // if user enter any in serach bar or press enter then also query should be run and on click search icon then also swueru should run
    //? . && its know optional chaining to control app crash
    if((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0){
      // after all cond satisfies then goes to search result page {searchQuery is a pass query in seaarch bar}
      navigate(`/searchResult/${searchQuery}`)
    }
  }

  //for mobile screen
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const {pathname} = useLocation()
  //is use to check mobilemenu is where to open 
  const pageName = pathname?.split('/')?.filter(Boolean)?.at(0)

  return (
    <nav className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black text-white'>
        {
          loading
        }
          <div className='flex'>
            {
              //if video page is open then mobile menu should not be open 
              pageName !== 'video' && (
                <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>
                  {mobileMenu ? (
                    <IoMdClose  className='text-white'/>
                  ) : (
                    <RxHamburgerMenu  className='text-white'/>
                  )}
                </div>
              )
            }
            <Link to={'/'} className='flex'>
              <img src={logo} className='dark:md:block h-5' />
              <p className='font-bold  hidden md:block'>YouTube<span className='font-light'><sup>IN</sup></span></p>
            </Link>
            <section className="group flex items-center border border-white">
              <section className='flex h-8 md:h-10 md:ml-10 md:pl-5 border-gray-400 rounded-l-3xl group-focus-within:ml-5 md:group-focus-within:pl-0'>
                <input className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]' type='text' onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery}/>
              </section>
              <button className=''>
                <IoIosSearch className='text-white text-xl'/>
              </button>
            </section>
            <div className='flex items-center'>
              <div className='hidden md:flex'>
                <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-=#303030]/[0.6]'>
                  <TbVideoPlus className='text-white text-xl cursor-pointer'/>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-=#303030]/[0.6]'>
                  <FaRegBell className='text-white text-xl cursor-pointer'/>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-=#303030]/[0.6]'>
                  <img src={profile} alt='profile' className='h-8 ' />
                </div>
              </div>
            </div>
          </div>
    </nav>
  )
}

export default Header