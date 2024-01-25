"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import logoImage from '../public/assets/images/logo.svg';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {

  const isUserLoggedIn = true;
  const [Provider, setProvider] = useState(null)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProvider(response)
    }
    setProvider();
  }, [])

  return (
    <div>
      <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
          <div className='flex justify-start '>
            <Image src={logoImage} width={30} height={30} />
            <p className='max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide'>promptopia</p>
          </div>
          {/* desktop navigation */}
          <div className='sm:flex hidden '>
            {isUserLoggedIn ? (<div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='fixed top-4  right-[190px]  rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>
create post

              </Link>
              <button type="button" onClick={signOut}className=' fixed top-4 right-[60px] rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center'>signOut</button>
              <Link href='/profile' >
                <Image src={logoImage} width={30} height={30} className='fixed  top-4 right-6'/>
              </Link>
            </div>) : (<>
            {Provider && Object.values(Provider).map((provider) => (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)} className='fixed top-4 right-3 rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>Sign in</button>
              </div>
            ))}
            

            </>)}
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Nav;