import React,{useEffect} from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typical from "react-typical";

import './Main.css'

function Home() {
  

  useEffect(() => {
    gsap.set(".hero", {visibility: 'visible'});
    gsap.from(".hero", {y: 1280, duration: 1.2 , ease: "easeOut"})
    gsap.from(".hero", {scale: 0.8 ,duration: 2,delay: 0.1 , ease: "easeOut"});
    gsap.from(".text", {y: 1280,duration: 1.5 , ease: "easeOut"}); 

  })
    return (
      
      <div className=" z-1 hero " >
      <div className=" sm:h-screen md:h-screen lg:h-screen  xl:h-screen 2xl:h-screen flex justify-center absolute opacity-40 w-auto ">
        <img src="../images/profilecolor1.png" alt="profile"/>
      </div>

      <div className=" pt-56 text sm:pt-80 xl:pt-96  flex flex-col justify-center items-center  relative  ">
        <h1
          className="base-font sm:text-1xl  md:text-2xl lg:text-3xl text-1xl
     font-normal"
        >
          <Typical
            steps={["Hi, I'm Prasert Saengkaew", 2000]}
            wrapper="b"
          ></Typical>
        </h1>
        <h1
          className="sm:text-4xl md:text-6xl lg:text-7xl text-4xl
    font-medium "
        >
          I'm a{" "}
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={["Web Developer💻", 4000, "Web Design 🖌", 4000]}
          ></Typical>
        </h1>
        <Link
          to="/project"
          className="mt-20 py-7 px-7 bg-red-400 rounded-full text-xl hover:bg-red-500 transition 
   duration-300 ease-in-out flex items-center animate-bounce"
        >
          {" "}
          <h1>View Project</h1>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </Link>
      </div>
    </div>
    )
}

export default Home
