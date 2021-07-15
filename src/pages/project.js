import ContentComponent from "../components/Content";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../components/Main.css";
import styled from "styled-components";
import tw from "twin.macro";

const ProjectContainer = styled.div`
  ${tw`
    shadow-lg
  `}
  visibility: hidden;
`;

const TextContainer = styled.div`
  ${tw`
    flex 
    justify-center
  `}
`;

const HeadText = styled.h1`
  ${tw`
    text-center 
    mx-20 
    mt-24 
    mb-24 
    text-5xl 
    font-black  
  `}
`;

const TypeText = styled.h1`
  ${tw`
    mx-20 
    mt-10 
    text-3xl 
    font-black  
  `}
`;

function Project() {
  useEffect(() => {
    gsap.set(".hero", { visibility: "visible" });
    gsap.fromTo(".hero", { y: 200 }, { y: 0, duration: 1 });
    gsap.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return (
    <>
      <ProjectContainer className="hero">
        <TextContainer>
          {" "}
          <HeadText>PERSONAL PROJECT ✍🏼</HeadText>
        </TextContainer>

        <TextContainer>
          {" "}
          <TypeText>Graphic Design</TypeText>
        </TextContainer>
        <ContentComponent
          thumbnailUrl1="/images/graphic1.jpg"
          thumbnailUrl2="/images/graphic2.jpg"
        />

        <TextContainer>
          {" "}
          <TypeText>3D</TypeText>
        </TextContainer>
        <ContentComponent
          thumbnailUrl1="/images/3d1.jpg"
          thumbnailUrl2="/images/3d2.jpg"
        />

        <TextContainer>
          {" "}
          <TypeText>Web Design</TypeText>
        </TextContainer>
        <ContentComponent
          thumbnailUrl1="/images/webdesign1.jpg"
          thumbnailUrl2="/images/webdesign2.jpg"
        />

        <TextContainer>
          {" "}
          <TypeText>App Design</TypeText>
        </TextContainer>
        <ContentComponent
          thumbnailUrl1="/images/appdesign1.jpg"
          thumbnailUrl2="/images/appdesign2.jpg"
        />


        <TextContainer>
          {" "}
          <TypeText>Front-end Develop</TypeText>
        </TextContainer>
        <ContentComponent
          thumbnailUrl1="/images/frontend1.jpg"
          thumbnailUrl2="/images/frontend2.jpg"
        />
      </ProjectContainer>
    </>
  );
}

export default Project;
