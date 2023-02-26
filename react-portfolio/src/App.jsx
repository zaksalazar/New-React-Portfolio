import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card";
import { Fragment as Fragment2 } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";



export default function App() {
  return (
  <div class="bg-gradient-to-t from-gray-700 via-gray-900 to-black min-h-screen">
    <Navbar /> 
    <Hero />
    <div>
    <Card 
    logo= ".../././assets/openminded.png"
    description="Open Minded"
    name="Open Minded"
    link="https://github.com/zaksalazar/Open-Minded"
    />
    </div> 
</div>
  )
}
