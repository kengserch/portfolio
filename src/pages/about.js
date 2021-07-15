import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../components/Main.css";
import styled from "styled-components";
import tw from "twin.macro";

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

const AboutContainer = styled.div`
  ${tw`
    grid 
    lg:grid-cols-2 
    sm:grid-cols-1 
    gap-4 
    mx-14 
    my-28
  `}
  visibility: hidden;
`;

const Profile = styled.img`
  ${tw`
    shadow-lg 
    sm:w-10/12 
    sm:max-h-full 
    ml-4 
    lg:w-10/12 
    rounded-full 
  `}
`;

const AboutMe = styled.h1`
  ${tw`
   text-4xl
   mb-14 
   sm:text-4xl 
   sm:mt-2 
   lg:text-6xl 
   uppercase 
   font-black
  `}
`;
const SubHead = styled.h1`
  ${tw` 
   text-3xl 
   font-black 
   my-8
  `}
`;
const SubName = styled.h1`
  ${tw` 
   text-2xl 
   font-black 
   my-8
  `}
`;

const Detailtext = styled.h1`
  ${tw` 
   text-2xl 
  `}
`;

function About() {
  useEffect(() => {
    gsap.set(".hero", { visibility: "visible" });
    gsap.from(".image", { x: -50, duration: 1.2, ease: "easeOut" });
    gsap.from(".image", {
      scale: 0.8,
      duration: 2,
      delay: 0.1,
      ease: "easeOut",
    });
    gsap.fromTo(
      ".headtext",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.3, ease: "easeOut" }
    );
    gsap.fromTo(
      ".subhead",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.5, ease: "easeOut" }
    );
    gsap.fromTo(
      ".detail",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.8, ease: "easeOut" }
    );
  });
  return (
    <AboutContainer className="hero">
      <Profile
        className="image"
        src="../images/profile-about.jpg"
        alt="profile"
      ></Profile>
      <div>
        <AboutMe className="headtext">About Me 👋🏼</AboutMe>
        <SubHead className="subhead">
          I'm a UI Designer and Front End Developer from Thailand. My name is
          Prasert Saengkaew
        </SubHead>
        <SubName className="subhead">
          My name : Prasert Saengkaew &nbsp; Nickname : Keng &nbsp; Age : 22
        </SubName>
        <Detailtext className="detail">
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. I was excited when I built my own website.
        </Detailtext>
      </div>
    </AboutContainer>
  );
}

export default About;
