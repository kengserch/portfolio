import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "./Main.css";
import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  visibility: hidden;
`;

const ImageContainer = styled.div`
  ${tw`
   h-auto
   flex 
   justify-center 
   absolute 
   opacity-40 
   w-full
  `}
`;

const TextContainer = styled.div`
  ${tw`
   pt-56  
   sm:pt-80 
   xl:pt-96  
   flex 
   flex-col 
   justify-center 
   items-center  
   relative  
  `}
`;

const MyName = styled.h1`
  ${tw`
   text-xl
   sm:text-xl  
   md:text-2xl 
   lg:text-3xl 
   font-normal
  `}
`;

const MyJob = styled.h1`
  ${tw`
   sm:text-4xl 
   md:text-6xl 
   lg:text-7xl 
   text-4xl
   font-medium
  `}
`;

function Home() {
  useEffect(() => {
    gsap.set(".hero", { visibility: "visible" });
    gsap.from(".hero", { y: 1280, duration: 1.2, ease: "easeOut" });
    gsap.from(".hero", {
      scale: 0.8,
      duration: 2,
      delay: 0.1,
      ease: "easeOut",
    });
    gsap.from(".text", { y: 1280, duration: 1.5, ease: "easeOut" });
  });
  return (
    <HomeContainer className="hero">
      <ImageContainer>
        <img src="../images/profilecolor1.png" alt="profile" width="1000px" height="1000px" />
      </ImageContainer>
      <TextContainer>
        <MyName>
          <Typical
            steps={["Hi, I'm Prasert Saengkaew", 2000]}
            wrapper="b"
          ></Typical>
        </MyName>
        <MyJob>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Web Developer💻", 4000, "Web Design 🖌", 4000]}
          ></Typical>
        </MyJob>
        <Link
          to="/project"
          className="shadow-lg mt-20 py-7 px-7 bg-red-400 rounded-full text-xl hover:bg-red-500 transition 
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
      </TextContainer>
    </HomeContainer>
  );
}

export default Home;
