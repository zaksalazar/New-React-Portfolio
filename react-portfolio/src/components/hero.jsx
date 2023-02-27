import React from 'react'

const Hero = () => {
  return (
<div class="hero min-h-screen bg-base-200 pt-20 grid h-screen items-center justify-center flex flex-col">
  <div class="hero-content flex-col lg:flex-row-reverse ">
  <h1 className="text-center text-2xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 ">About Me</h1>
    <div className="flex items-center justify-center">
    <img  src="./assets/profilefull.png" className="max-w-sm rounded-lg shadow-2xl pt-5 px-30 items-center justify-center" />
    </div>
    <div>
      <h1 class="flex items-center justify-center text-5xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 pt-5 ">Zak Salazar</h1>
      <p className="flex items-center justify-center py-6 text-3xl text-white">Former Park Ranger now Full-Stack Developer</p>
    </div>
  </div>
 </div>
  )
}

export default Hero