import {useState} from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png"

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`text-white mx-4 ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
     <nav className='flex md:justify-center justify-between items-center px-4'>
         <div className='flex-[0.5]'>
         <img src={logo} alt="logo" className='w-32 py-4 cursor-pointer' />
        </div>

        <ul className='items-center cursor-pointer md:flex hidden'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item,index)=>{
            return (
                <NavbarItem key={index} title={item}/> 
            )
        })}
        <li className='text-white mx-4 bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]'>
            Login
        </li>
        </ul>

        <div className='flex relative'>
            {toggleMenu
            ? (<AiOutlineClose fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=> setToggleMenu(false)}/>)
            : (<HiMenuAlt4 fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=> setToggleMenu(true)}/>)
            }
            {toggleMenu && (
                <ul className='z-10 fixed top-0 -right-2 shadow-2xl cursor-pointer flex flex-col md:hidden w-[70vw] h-screen blue-glassmorphism items-end'>
                <li className='w-full'>
                (<AiOutlineClose fontSize={28} className='text-white cursor-pointer md:hidden mx-4' onClick={()=> setToggleMenu(false)}/>
                </li>
                  {["Market", "Exchange", "Tutorials", "Wallets"].map((item,index)=>{
                      return (
                          <NavbarItem key={index} title={item} classProps="my-2 text-lg"/> 
                      );
                  })}
                </ul>
                     )
                }
        </div>

    </nav>
  )
}

export default Navbar