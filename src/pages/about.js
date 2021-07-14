import React,{useEffect} from "react";
import { gsap } from "gsap";
import '../components/Main.css'
//import styled from "styled-components";

// const Button = styled.button `
//   cursor: pointer;
//   background: transparent;
//   font-size: 16px;
//   border-radius: 3px;
//   color: #000;
//   border: 2px solid #000;
//   margin: 0 1rem;
//   padding: 0.25rem 1rem;
//   transition: 0.5s all ease-out;

//   &:hover{
//     background-color:#000;
//     color : #fff;
//   }
// `;
function About() {

  useEffect(() => {
    gsap.set(".hero", {visibility: 'visible'});
    gsap.from(".image", {x: -50, duration: 1.2 , ease: "easeOut"})
    gsap.from(".image", {scale: 0.8 ,duration: 2,delay: 0.1 , ease: "easeOut"});
    gsap.fromTo(".headtext", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.3, ease: "easeOut"});
    gsap.fromTo(".subhead", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.5, ease: "easeOut"});
    gsap.fromTo(".detail", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.8, ease: "easeOut"});

  })
  return (
    <div class=" hero font-mono  grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mx-14 my-28">
      <div >
        <img className=" image sm:w-10/12 sm:max-h-full ml-4 lg:w-10/12 rounded-full " src="../images/profile-about.jpg" alt="profile"/>
      </div>
      <div>
        <h1 className=" headtext mb-14 sm:text-1xl sm:mt-2 text-6xl uppercase font-black">About Me</h1>
        <h1 className=" subhead text-3xl font-black my-8">
          I'm a UI Designer and Front End Developer from Thailand
        </h1>
        <h1 className="detail text-2xl font-black">
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. I was excited when I built my own website.
        </h1>
      </div>
    </div>
  );
}

export default About;
