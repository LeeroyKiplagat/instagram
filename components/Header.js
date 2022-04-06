import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
}from '@heroicons/react/outline'
import { HomeIcon} from '@heroicons/react/solid'
import { signIn,signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom';



function Header () {
  const {data: session} =  useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router=useRouter();
  

  
  return (
    <div className=" shadow-sm border-b bg-white fixed w-screen z-10">
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/**left hand side */}
        <div onClick={()=>router.push('/')} className=' relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image 
              src="https://links.papareact.com/ocw" 
              layout="fill" 
              objectFit='contain' 
            />
        </div>
        <div onClick={()=>router.push('/')}  className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image 
            src='https://links.papareact.com/jjm' 
            layout='fill' 
            objectFit='contain'
          />
        </div>

        {/**middle hand side - serch input field */}
        <div className=' max-w-xs'>
          <div className=' relative mt-1 p-3 rounded-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500'/>

            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black ' />
          </div>
        </div>
        

        {/**right hand side */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={()=>router.push('/')} className='navBtn'/>
          <MenuIcon className='h-6 md:hidden cursor-pointer'/>

          {session?(
            <>
              
            <div>
            <PaperAirplaneIcon className='navBtn'/>
            <div className='bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white absolute -top-0 mt-3 ml-2 text-xs w-5 h-5'>3</div>
          </div>
          
          <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn'/>
          <UserGroupIcon className='navBtn'/>
          <HeartIcon className='navBtn'/>
          <img src={session.user.image} alt='profile' className='h-10 rounded-full cursor-pointer' onClick={signOut}/>
          </>

          ):(
            <button onClick={signIn}>Sign In</button>
          )}
          
          

        </div>
        
      </div>
   
    </div>
  )
}

export default Header