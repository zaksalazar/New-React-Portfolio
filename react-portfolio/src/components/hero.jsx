import React from 'react'

const Hero = () => {
  return (
<div class="hero min-h-screen bg-base-200 pt-20 grid h-screen place-items-center">
  <div class="hero-content flex-col lg:flex-row-reverse ">
  <h1 class="text-4xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 ">About Me</h1>
    <img  src="./assets/profilefull.png" class="max-w-sm rounded-lg shadow-2xl pt-5" />
    <div>
      <h1 class="text-5xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 pt-5 ">Zak Salazar</h1>
      <p class="py-6 text-3xl text-white">Former Park Ranger now Full-Stack Developer</p>
    </div>
  </div>
</div>
  )
}

export default Hero