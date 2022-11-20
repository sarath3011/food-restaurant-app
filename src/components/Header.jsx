import React, { useState } from 'react'
import Logo from '../img/logo.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {MdShoppingBasket,MdAdd,MdLogout} from 'react-icons/md'
import Avatar from '../img/avatar.png';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import {useStateValue} from '../content/StateProvider';
import {actionType} from '../content/reducer';
import { app } from '../firebase.config';


const Header = () => {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  /**dispatch data into data layer */
const[isMenu,setisMenu] =useState(false)
  const[{user,cartShow, cartItems},dispatch] = useStateValue()
    const login = async()=>{
      if(!user){  //if the user not login do these dispatch from avatar
const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider)
        dispatch({
          type:actionType.SET_USER,
          user:providerData[0]
    
        })
        localStorage.setItem('user',JSON.stringify(providerData[0]))
      }
      else{
        setisMenu(!isMenu)
      }
    
  }
  const logout = ()=>{
    setisMenu(false)
    localStorage.clear();//remove data from localstorage
    dispatch({
      type:actionType.SET_USER, //remove data from datalayer
      user:null
    })
  }
const showCart = ()=>{
  dispatch({type:actionType.SET_CART_SHOW,
  cartShow : !cartShow
  })
}

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/**desktop & tablet */}

      <div className='hidden md:flex w-full h-full items-center justify-between'>
    {/**Logo */}
    <Link to={"/"} className='flex item-center justify-center gap-2'> 
<img src={Logo} alt="logo" className='w-8 object-cover' />
<p className="text-headingColor text-xl font-bold mt-1 ml-1 ">City</p>
    </Link>
    {/**Logo */}

{/**List */}
      <div className='flex items-center gap-8'>
        <motion.ul 
          initial={{opacity:0, x:200}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:200}}
        className='flex  items-center gap-16'>
        <Link to={"/"}>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            </Link>
          <li className='text-base text-textColor hover:text-headingColor 
          duration-100 transistion-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor 
          duration-100 transistion-all ease-in-out cursor-pointer'>About Us</li>
          <li className='text-base text-textColor hover:text-headingColor
           duration-100 transistion-all ease-in-out cursor-pointer'>Service</li>
        </motion.ul>


          {/**Shopping Cart */}

        <div className="relative flex items-center
         justify-center mr-2"onClick={showCart} >
<MdShoppingBasket className='text-textColor text-2xl  cursor-pointer'/>
{cartItems && cartItems.length > 0 && (
  <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full
  bg-cartNumBg flex items-center justify-center">
   <p className="text-xs text-white font-semibold">{cartItems.length}</p>
  </div>
 )}


        </div>

{/**login user */}
<div className="relative">
<motion.img whileTap={{scale:0.6}}
src={user? user.photoURL:Avatar} 
alt="userProfile" 
className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl rounded-full cursor-pointer' 
onClick={login}
/>
{/**login user */}

{/**DropDown */}

{ isMenu &&(
<motion.div
  initial={{opacity:0, scale:0.6}}
  animate={{opacity:1, scale:1}}
  exit={{opacity:0, scale:0.6}}
  className="w-40 absolute top-12 right-0 shadow-xl rounded-lg">
    <Link to={"/createItem"}>
<p className="px-4 py-2 flex item-center gap-2 cursor-pointer
   hover:bg-slate-100 transition-all duration-100 
   ease-in-out text-textColor text-base"
   onClick={()=>setisMenu(false)}
  >
    New Items <MdAdd className='mt-1 ' />
   </p>
    </Link>
 
   <p className="px-4 py-2 flex item-center gap-3 cursor-pointer
   hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
   onClick={logout}
   >
  Logout<MdLogout className='mt-1 '/>
   </p>
   
  </motion.div> 
  )} 
  
  {/**DropDown */}
  </div>
     </div>
      </div>

 {/**Mobile*/}

      <div className='flex item-center justify-between md:hidden w-full h-full'>

      <div className="relative flex items-center justify-center mr-3" onClick={showCart}>
          <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer'/>
          {cartItems && cartItems.length >0 &&(
      <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg 
      flex items-center justify-center">
                   <p className="text-xs text-white font-semibold">
                    {cartItems.length} </p>
            </div>
          )}
  
    </div>
            {/**Logo */}

      <Link to={"/"}
      className='flex item-center justify-center gap-2'> 
      <img src={Logo} alt="logo" className='w-8 object-cover' />
      <p className="text-headingColor text-xl font-bold mt-1 ml-1 ">City</p>
       </Link>

        {/**Logo */}

{/**login user */}

<div className="relative">
<motion.img whileTap={{scale:0.6}}
src={user? user.photoURL:Avatar} 
alt="userProfile" 
className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl rounded-full cursor-pointer' 
onClick={login}
/>
{/**login user */}

{/**DropDown */}

{ isMenu &&(
<motion.div
  initial={{opacity:0, scale:0.6}}
  animate={{opacity:1, scale:1}}
  exit={{opacity:0, scale:0.6}}
  className="w-40 absolute top-12 right-0 shadow-xl rounded-lg">
    {user && user.email === "rahulsarath231994@gmail.com" && (
    <Link to={"/createItem"}>
    <p className="px-4 py-2 flex items-center gap-2 cursor-pointer
       hover:bg-slate-100 transition-all duration-100
        ease-in-out text-textColor text-base"
     onClick={()=>setisMenu(false)}
     >
        New Items <MdAdd className='mt-1 ' />
       </p>
        </Link>

  )}


    <ul
className='flex flex-col '>
          <li className='text-base text-textColor hover:text-headingColor 
          duration-100 transistion-all ease-in-out cursor-pointer px-4 py-2' onClick={()=>setisMenu(false)}
         >Home</li>
          <li className='text-base text-textColor hover:text-headingColor 
          duration-100 transistion-all ease-in-out cursor-pointer px-4 py-2'onClick={()=>setisMenu(false)}
         >Menu</li>
          <li className='text-base text-textColor hover:text-headingColor 
          duration-100 transistion-all ease-in-out cursor-pointer px-4 py-2'onClick={()=>setisMenu(false)}
         >About Us</li>
          <li className='text-base text-textColor hover:text-headingColor
           duration-100 transistion-all ease-in-out cursor-pointer px-4 py-2'onClick={()=>setisMenu(false)}
          >Service</li>
        </ul>


   <p 
   className="m-2 p-2 flex item-center gap-3 bg-gray-200 border-t-gray-100
   cursor-pointer rounded-md shadow-md justify-center hover:bg-slate-100
    transition-all duration-100 ease-in-out text-textColor text-base"
    onClick={logout}
   >
  Logout<MdLogout className='mt-1 '/>
   </p>
   
  </motion.div> 
  )} 
    {/**DropDown */}
  </div>
     </div>
         </header>
  )
}

export default Header
