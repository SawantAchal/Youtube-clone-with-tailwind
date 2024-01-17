import React, { useContext } from 'react'
import {settingSideBar, sideBar} from '../data/Sidebar'
import { Context } from '../Context/contextApi'
import SiderBarMenuItem from './SiderBarMenuItem'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const {selecteCategories,setSelecteCategories,mobileMenu} = useContext(Context)

  const naviagte = useNavigate();

  const clickHandler = (name , type) => {
    switch (type) {
      case 'category':
        return setSelecteCategories(name)
      case 'home':
        return setSelecteCategories(name)
      case 'menu':
        return false
      default:
        break;
    }
  }
  return (
    <div className='md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240px] md:translate-x-0 transition-all text-white'>
      <div className='flex px-5 flex-col'>
        {
          sideBar.map((item) => {
            // className='flex gap-2 items-center mb-5  hover:bg-gray-400 hover:p-3 hover:rounded-lg'
            return(
              <div>
                <SiderBarMenuItem text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}
                action={() =>{clickHandler(item.name , item.type); naviagte('/')}}
                className={`${selecteCategories === item.name ? "bg-white/[0.15]" :""}`}/>
                {item.divider && (
                  <hr className='my-5 border-white'/>
                )}
              </div>
            )
          })
        }
        <hr className='my-5 border-white'/>
        <div>
          <p className='mt-4'>Clone By : Achal Sawant</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar