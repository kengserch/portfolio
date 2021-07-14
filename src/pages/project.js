import ContentComponent from '../components/Content'
import React,{useEffect} from "react";
import { gsap } from "gsap";
import '../components/Main.css'
function Project() {

  useEffect(() => {
    gsap.set(".hero", {visibility: 'visible'});
    gsap.fromTo(".hero", {y: 200}, {y: 0, duration: 1});
    gsap.fromTo(".hero", {opacity: 0}, {opacity: 1, duration: 1});
  })

 return (
  <>
  <div className=" hero shadow-lg ">
  <div className="text flex justify-center"> <h1 className="text-center mx-20 mt-24 mb-24 text-5xl font-black  ">PERSONAL PROJECT ✍🏼</h1></div>

  <div className="text flex justify-center"> <h1 className="mx-20 mt-10 text-3xl font-black ">Graphic Design</h1></div>
  <ContentComponent thumbnailUrl1="/images/graphic1.jpg" thumbnailUrl2="/images/graphic2.jpg"/>
  
  <div className="flex justify-center"> <h1 className="mx-20 mt-10 text-3xl font-black">3D</h1></div>
  <ContentComponent thumbnailUrl1="/images/3d1.jpg" thumbnailUrl2="/images/3d2.jpg"/>

  <div className="flex justify-center"> <h1 className="mx-20 mt-10 text-3xl font-black">Web Design</h1></div>
  <ContentComponent thumbnailUrl1="/images/webdesign1.jpg" thumbnailUrl2="/images/webdesign2.jpg"/>

  <div className="flex justify-center"> <h1 className="mx-20 mt-10 text-3xl font-black">App Design</h1></div>
  <ContentComponent thumbnailUrl1="/images/appdesign1.jpg" thumbnailUrl2="/images/appdesign2.jpg"/>

  <div className="flex justify-center"> <h1 className="mx-20 mt-10 text-3xl font-black">Front-end Develop</h1></div>
  <ContentComponent thumbnailUrl1="/images/frontend1.jpg" thumbnailUrl2="/images/frontend2.jpg"/>
  </div>

</>
  
  
 )
}

export default Project
