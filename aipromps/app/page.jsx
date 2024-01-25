"use client";
import React from 'react'
import "../styles/globals.css"

const Home = () => {
  return (
    <div className='w-full flex-col flex-center'>
      <h1 className='text-center text-2xl font-bold text-slate-800 mt-[100px]'>Discover and share
      
      <br className='max-md:hidden'/>
      <span className='text-orange-500 text-center'>AI powered prompts</span>
      </h1>
      <p className='desc text-center'>
        promptopia is an open source project that uses GPT-3 to generate prompts for creative writing, art, and more.create an account to save your favorite prompts and share your own.
      </p>

    
    </div>
  )
}

export default Home