import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card";
import { FaGithub } from 'react-icons/fa';
import { Fragment as Fragment2 } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";



export default function App() {
  return (
  <div class="bg-gradient-to-t from-gray-700 via-gray-900 to-black min-h-screen">
    <Navbar /> 
    <Hero />
    <div>
    <Card 
    image="../.././assets/openminded.png"
    description="A video chat app that creates a safe space for users to debate the major issues facing our society."
    name="Open Minded"
    link="https://github.com/zaksalazar/Open-Minded"
    site=" https://open-minded.herokuapp.com/"
    />
    <Card 
    image="../../../assets/HappenIn.png"
    description="An app that allows users to fine live events based on city, date, and genre"
    name="Happenin"
    link="https://github.com/zaksalazar/HappenIn"
    site="https://zaksalazar.github.io/HappenIn/"
    />
    <Card 
    image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    description="A 5 day weather forecast app by city"
    name="Weather App"
    link="https://github.com/zaksalazar/weather"
    site="https://zaksalazar.github.io/weather/"
    />
    <Card
    image="../../../assets/scheduler.png"
    description="A helpful scheduling application to schedule your daily tasks"
    name="Work Day Scheduler"
    site="https://zaksalazar.github.io/Scheduler/"
    link="https://github.com/zaksalazar/Scheduler"
    />
    <Card 
    image="../../../assets/note.png"
    description= "An application that allows users to add, edit, and delete important notes"
    name="Note Taker"
    site="https://infinite-beyond-09525.herokuapp.com/"
    link="https://github.com/zaksalazar/Note-Taker"
    />
    </div> 
</div>
  )
}
