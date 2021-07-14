import React,{useEffect} from "react";
import { gsap } from "gsap";
import "../components/Main.css";
function Contact() {

  useEffect(() => {
    gsap.set(".hero", {visibility: 'visible'});
    gsap.fromTo(".headtext", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.3, ease: "easeOut"});
    gsap.fromTo(".facebook", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.5, ease: "easeOut"});
    gsap.fromTo(".line", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.7, ease: "easeOut"});
    gsap.fromTo(".instagram", {opacity: 0}, {opacity: 1, y:44 ,duration: 1,delay: 0.9, ease: "easeOut"});

  })
  return (
    <div className=" hero flex justify-center grid grid-rows-4 ">
      <h1 className="headtext text-6xl uppercase font-black pt-10">Contact</h1>
      <div className="animate-bounce facebook mt-12 w-full h-24 backdrop-opacity-40 text-2xl rounded-full font-bold text-center py-8 bg-blue-200 hover:bg-blue-400 cursor-pointer">
      <h1>FACEBOOK</h1> <img src="../images/f_logo.png" alt="f-logo"  width="50px" height="50px"  />
      </div>
      <div className="animate-bounce line mt-12 w-full h-24 backdrop-opacity-40 text-2xl rounded-full font-bold text-center py-8 bg-green-200 hover:bg-green-400 cursor-pointer">
        <h1>LINE</h1> <img src="../images/l_logo.png" alt="l-logo" width="70px" height="70px" />
      </div>
      <div className="animate-bounce instagram mt-12 w-full h-24 backdrop-opacity-40 text-2xl rounded-full font-bold text-center py-8 bg-red-200 hover:bg-red-400 cursor-pointer">
        <h1>INSTRAGRAM</h1> <img src="../images/i_logo.png" alt="i-logo" width="50px" height="50px" />
      </div>
    </div>
  );
}

export default Contact;
