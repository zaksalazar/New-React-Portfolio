import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projectcard from "./components/Projectcard";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaGithub } from "react-icons/fa";
import { Fragment as Fragment2 } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import openMindedImg from "./assets/openminded.png";
import hapNin from "./assets/HappenIn.png";
import scheduler from"./assets/scheduler.png"; 
import note from "./assets/note.png";

export default function App() {
  return (
    <div class="bg-gradient-to-t from-gray-700 via-gray-900 to-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-3 gap-6">
        <Projectcard
          image={openMindedImg}
          description="A video chat app that creates a safe space for users to debate the major issues facing our society."
          name="Open Minded"
          link="https://github.com/zaksalazar/Open-Minded"
          site=" https://open-minded.herokuapp.com/"
        />
        <Projectcard
          image={hapNin}
          description="An app that allows users to fine live events based on city, date, and genre"
          name="Happenin"
          link="https://github.com/zaksalazar/HappenIn"
          site="https://zaksalazar.github.io/HappenIn/"
        />
        <Projectcard
          image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          description="A 5 day weather forecast app by city"
          name="Weather App"
          link="https://github.com/zaksalazar/weather"
          site="https://zaksalazar.github.io/weather/"
        />
        <Projectcard
          image={scheduler}
          description="A helpful scheduling application to schedule your daily tasks"
          name="Work Day Scheduler"
          site="https://zaksalazar.github.io/Scheduler/"
          link="https://github.com/zaksalazar/Scheduler"
        />
        <Projectcard
          image={note}
          description="An application that allows users to add, edit, and delete important notes"
          name="Note Taker"
          site="https://infinite-beyond-09525.herokuapp.com/"
          link="https://github.com/zaksalazar/Note-Taker"
        />
        <Projectcard
          image="https://blog.scielo.org/en/wp-content/uploads/sites/2/2022/02/markus-spiske-70Rir5vB96U-unsplash-768x512.jpg"
          description="A text editor to write notes and code snippets"
          name="Text Editor"
          site="https://intense-brushlands-24590.herokuapp.com/"
          link="https://github.com/zaksalazar/My-text-editor"
        />
      </div>
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
