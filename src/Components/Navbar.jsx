// import React, { useState } from 'react'
// import logo from '../Assets/logo.png'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoIosSearch } from "react-icons/io";
// import { HiMicrophone } from "react-icons/hi";
// import { TbVideoPlus } from "react-icons/tb";
// import { FaRegBell } from "react-icons/fa";
// import profile from '../Assets/profile.png'
// import {settingSideBar, sideBar} from '../data/Sidebar'

// const Navbar = () => {
//     const [sidebar , setSideBar] = useState(false)

//     const handleSideBar = () => {
//         setSideBar(!sidebar)
//     }

//   return (
//     <nav>
//         <section className='flex md:justify-between justify-around bg-pink-300 p-3 w-full sm:w-full'>
//             <section className='flex items-center gap-1'>
//                 <RxHamburgerMenu className='md:hidden'/>
//                 <img src={logo} alt='logo' className='h-8 '/>
//                 <p className='font-bold  hidden md:block'>YouTube<span className='font-light'><sup>IN</sup></span></p>
//             </section>
//             <section className='flex items-center text-center gap-2 md:w-[77vh] md:h-10 h-8 '>
//                 <section className='flex border border-gray-500 rounded-full md:w-full w-auto md:h-full h-full '>
//                     <input type='search' className='rounded-l-full border border-gray-500 pl-2 grow bg-slate-700' placeholder='Search'/>
//                     <IoIosSearch className='text-2xl md:m-2 md:ml-3 m-auto'/>
//                 </section>
//                 <section className='bg-gray-400 h-8 rounded-full w-8 text-center items-center hidden '>
//                     <HiMicrophone className=' m-2 ' />
//                 </section>
//             </section>
//             <section className='flex gap-4 align-middle items-center text-xl'>
//                 <TbVideoPlus className='hidden md:block' />
//                 < FaRegBell className='hidden md:block'/>
//                 <img src={profile} alt='profile' className='h-8 ' />
//             </section>
//         </section>
//         <header className='bg-pink-300 w-64 h-screen text-center p-3 mb-9 hidden md:block'>
//             <section>
//                 {
//                     sideBar.map((item) => {
//                         return(
//                             <section className='flex gap-2 items-center mb-5  hover:bg-gray-400 hover:p-3 hover:rounded-lg' >
//                                 {item.icon}
//                                 {item.name}
//                             </section>
//                         )
//                     })
//                 }
//             </section>
//             <hr />
//             <section>
//                 {
//                     settingSideBar.map((item) => {
//                         return(
//                             <section className='flex gap-2 items-center mb-5 hover:bg-gray-400 hover:p-3 hover:rounded-lg' >
//                                 {item.icon}
//                                 {item.name}
//                             </section>
//                         )
//                     })
//                 }
//             </section>
//             <hr />
//             <section>
//                 <p className='mt-4'>Clone By : Achal Sawant</p>
//             </section>
//         </header>
//     </nav>
//   )
// }

// export default Navbar