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
    description="A video chat app that creates a safe space for users to debate the major issues facing our society."
    name="Open Minded"
    link="https://github.com/zaksalazar/Open-Minded"
    />
    </div> 
</div>
  )
}
