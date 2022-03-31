import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../components/Main.css";
import styled from "styled-components";
import tw from "twin.macro";


const ContactContainer = styled.div`
  ${tw`
    flex 
    justify-center 
    grid 
    grid-rows-4
  `}
  visibility: hidden;
`;

const HeadText = styled.h1`
  ${tw`
    text-5xl 
    font-black 
    pt-14 
  `}
`;

const FaceContainer = styled.div`
  ${tw`
    border-solid 
    border-4 
    border-blue-500 
    animate-bounce 
    mt-12 
    w-full 
    h-24 
    backdrop-opacity-40 
    text-2xl 
    rounded-full 
    font-bold 
    text-center 
    py-8 
    bg-blue-200 
    hover:bg-blue-400 
    hover:cursor-pointer
  `}
`;

const LineContainer = styled.div`
  ${tw`
    border-solid 
    border-4 
    border-green-500 
    animate-bounce 
    mt-12 
    w-full 
    h-24 
    backdrop-opacity-40 
    text-2xl 
    rounded-full 
    font-bold 
    text-center 
    py-8 
    bg-green-200 
    hover:bg-green-400
  `}
`;

const InContainer = styled.div`
  ${tw`
    border-solid 
    border-4 
    border-red-500 
    animate-bounce 
    mt-12 
    w-full 
    h-24 
    backdrop-opacity-40 
    text-2xl 
    rounded-full 
    font-bold 
    text-center 
    py-8 
    bg-red-200 
    hover:bg-red-400 
    cursor-pointer
  `}
`;



function Contact() {
  useEffect(() => {
    gsap.set(".hero", { visibility: "visible" });
    gsap.fromTo(
      ".headtext",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.3, ease: "easeOut" }
    );
    gsap.fromTo(
      ".facebook",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.5, ease: "easeOut" }
    );
    gsap.fromTo(
      ".line",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.7, ease: "easeOut" }
    );
    gsap.fromTo(
      ".instagram",
      { opacity: 0 },
      { opacity: 1, y: 44, duration: 1, delay: 0.9, ease: "easeOut" }
    );
  });
  return (
    <ContactContainer className="hero">
      <HeadText className="headtext">👇🏼 Contact Me 👇🏼</HeadText>
      <a href="https://www.facebook.com/prasert.sangkaew.18/" target="_blank" rel="noreferrer">
        <FaceContainer className="facebook">
          <h1>FACEBOOK</h1>{" "}
          <img
            src="../images/f_logo.png"
            alt="f-logo"
            width="50px"
            height="50px"
          />
        </FaceContainer>
      </a>
      <LineContainer className="line">
      <i class="fi fi-rr-Address-book"></i>
        <h1>  LINE : kengserch</h1>{" "}
        <img
          src="../images/l_logo.png"
          alt="l-logo"
          width="70px"
          height="70px"
        />
      </LineContainer>
  
      <a href="https://www.instagram.com/kengserch/" target="_blank" rel="noreferrer">
      <InContainer>
        <h1>INSTAGRAM</h1>{" "}
        <img
          src="../images/i_logo.png"
          alt="i-logo"
          width="50px"
          height="50px"
        />
      </InContainer>
      </a>
    
    </ContactContainer>
  );
}

export default Contact;
