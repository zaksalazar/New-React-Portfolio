import React from 'react'

const Hero = () => {
  return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img  src="./assets/profilefull.png" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 ">Zak Salazar</h1>
      <p class="py-6 text-3xl text-white">Former Park Ranger now Full-Stack Developer</p>
    </div>
  </div>
</div>
  )
}

export default Hero