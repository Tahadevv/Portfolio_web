"use client"
import Image from "next/image";
import hello from "@/app/icons/Image.png"
import tahaa from "@/app/icons/tahaaw.png"
import linkedin from "@/app/icons/likedin.png"
import github from "@/app/icons/github.png"
import a from "@/app/icons/Group.png"
import b from "@/app/icons/Group (1).png"
import c from "@/app/icons/Group (2).png"
import d from "@/app/icons/Group (3).png"
import e from "@/app/icons/Group (4).png"
import f from "@/app/icons/Frame.png"
import g from "@/app/icons/Frame (1).png"
import h from "@/app/icons/Group (5).png"
import aa from "@/app/icons/Image (1).png"
import bb from "@/app/icons/Image [work-emoji].png"
import cc from "@/app/icons/Image [img-side__main-img] (1).png"
import s from "@/app/icons/Span.png"
import s1 from "@/app/icons/Span (1).png"
import { motion } from "framer-motion"
import React from 'react';
import Navbar from "./compoenet/navbar";






export default function Home() {
  return (
    <main>
      
      {/* <div className="flex flex-row  justify-between px-10 py-6 bg-[#FFFFFF] shadow-md my-2 sticky top-0 z-50 ">
        <div className="text-[#2D2E32] font-bold " >Taha.dev</div>
        <div>
          <li className="flex flex-row">
            <ul className="px-1 text-[#2D2E32] font-bold max-lg:hidden">Home</ul>
            <ul className="px-1 text-[#2D2E32] font-bold max-lg:hidden">About</ul>
            <ul className="px-1 text-[#2D2E32] font-bold max-lg:hidden">Project</ul>
            <ul className="px-1 text-[#2D2E32] font-bold max-lg:hidden">Contact</ul>
          </li>
        </div>
      </div> */}

      <Navbar/>

      




      <div className="flex flex-row justify-center max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:content-center max-lg:self-center  ">
        <div className="pr-[155px] max-lg:pr-0   pt-[3%] max-lg:flex-col max-lg:relative  max-lg:top-[350px] max-sm:relative  max-sm:top-[240px] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:content-center   ">
          <h1 className=" text-[55px] text-[#2D2E32] font-extrabold max-sm:text-2xl flex justify-center content-center self-center ">
          MERN Stack React
          </h1>
          <h1 className="flex flex-row p-0 m-0 relative -top-4 max-sm:-top-1 font-extrabold max-sm:text-2xl text-[55px] text-[#2D2E32] ">
          Developer
          <div className="max-sm:w-[30px] max-sm:mx-2">
          <Image
          
          src={hello}
          
          alt="aaa"/>
          </div>
          </h1>

          <h2 className="text-[#555555] text-lg font-medium relative max-sm:text-sm max-sm:font-medium text-[]">
          Hi, I&apos;m Taha khan. A passionate MERN Full Stack 
          </h2>
          <h2 className="text-[#555555] max-sm:text-sm max-sm:font-medium text-lg font-medium relative">
          Developer based in Karachi, Pakistan. 📍
          </h2>

          <h3 className="flex flex-row mt-5">
            <a href="https://www.linkedin.com/in/taha-khan-react-developer/" target="_blank">
            <motion.div whileHover={{
    x: 0,
    y: -10,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }}>
            <Image
            src={linkedin}
            alt="icon"
            className="mx-2 hover:text-blue-400"
           
            />
            </motion.div>
            </a>

            <motion.div whileHover={{
    x: 0,
    y: -10,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }}>
            <a href="https://www.github.com.com" target="_blank">
            <Image
            src={github}
            alt="icon"
            className="mx-2"
            />
            </a>

            </motion.div>
          </h3>
          

        </div>
        <div className=" mt-[2%] border- max-lg:max-w-[50%]  border-black rounded-[80px] max-lg:flex-col max-lg:relative max-lg:-top-[300px] max-sm:relative max-sm:-top-[170px] ">
          <Image
          src={tahaa}
          alt="imggg"
          
          className="rounded-[80px] w-[380px] h-[360px] max-lg:w-[340px] max-lg:h-[320px] max-sm:w-[220px] max-sm:h-[220px] "
          />

        </div>
      </div>

      <div className="flex flex-wrap max-lg:flex-col justify-center mt-10 items-center  ">
        <h1 className="border-black border-r-4 max-lg:border-b-4 max-lg:border-r-0 max-lg:mb-4  px-8 font-bold max-sm:mb-8  ">
          Tech Stack
        </h1>
        <div className="flex flex-wrap">
        <motion.div whileHover={{
    x: 0,
    y: -25,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }} className="flex flex-row h-[45px]  w-[80px] mr-8 !ml-[40px] max-sm:h-[40px] max-sm:w-[60px]">
          <Image
         
          className="mx-1"
          src={a}
          alt="fd"/>
          <Image
          src={f}
          alt="fd"/>

        </motion.div>
        <motion.div whileHover={{
    x: 0,
    y: -25,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }} className="flex flex-row h-[45px] w-[80px] mx-4 max-sm:h-[40px] max-sm:w-[60px]">
          <Image
          className="mx-1"
          src={c}
          alt="fd"/>
          <Image
          src={d}
          alt="fd"/>

        </motion.div>
        <motion.div whileHover={{
    x: 0,
    y: -25,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }} className="flex flex-row h-[45px] w-[80px] mx-8 max-sm:h-[40px] max-sm:w-[60px]">
          <Image
          className="mx-1"
          src={e}
          alt="fd"/>
          <Image
          src={f}
          alt="fd"/>

        </motion.div>
        <motion.div whileHover={{
    x: 0,
    y: -25,
    scale: 1,
    rotate: 0,
    
  }} transition={{
    duration: 0.5,
     // Set the duration of the animation in seconds
  }} className="max-sm:relative max-sm:top-0 ">
        <div id="about" className="flex flex-row h-[45px] w-[80px] mx-4 max-sm:h-[40px] max-sm:w-[60px]   text-center ">
          <Image
          className="mx-1"
          src={g}
          alt="fd"/>
          <Image
          
          src={h}
          alt="fd"/>

        </div>
        </motion.div>
        </div>
      </div>

    <div id="about" className="flex flex-row max-lg:flex-col max-lg:items-center  justify-center mt-[250px]">
      <div className="mx-20 relative max-lg:rounded-xl ">
      
        <Image
        src={aa}
        className="relative left-[73%] top-[20%] max-lg:hidden"
        alt="sa"/>
        
        <Image
        src={cc}
        className="relative bottom-[42%] max-lg:rounded-[60px]"
        alt="sa"/>
        <Image
        className="relative bottom-[61%] left-[82%] max-lg:hidden"
        width={80}
        src={bb}t
        
        alt="df"/>
      </div>
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
        <h1 className="text-sm my-2 font-bold text-[#147EFB] max-lg:rounded-xl">
        About me
        </h1>
        <h2 className=" font-bold text-2xl text-[#2D2E32] ">
        MERN Stack Developer 
        </h2>
        <h2 className=" font-bold text-2xl relative bottom-2 text-[#2D2E32]">
        based in Karachi, Pakistan 📍
        </h2>
        <div className=" max-sm:hidden">
          <h1 className="text-xs mt-2 text-[#767676] font-bold ">
          Hey, my name is Taha, and I&apos;m a MERN Stack Mobile & App dev. My 
          </h1>
          <h1 className="text-xs mt-0 font-bold text-[#767676]">
          passion is to create and develop a modern web and mobile applications.
          </h1>
          
        </div>
        <div className="  block sm:hidden max-sm:text-center max-sm:px-2">
          <h1 className="text-xs mt-2 text-[#767676] font-bold ">
          Hey, my name is Taha, and I&apos;m a MERN Stack Mobile & App dev. My passion is to create and develop a modern web and mobile applications.
          </h1>
          
          
        </div>

        <div className="my-4 max-lg:pb-20 max-lg:flex max-lg:flex-col max-lg:items-center max-sm:hidden">
          
          <h1 className="text-xs text-[#767676] font-bold text-center ">
          My main stack currently is React/Next.js/React Native in combination with 
          </h1>
          <h1 className="text-xs text-[#767676] font-bold">
          Tailwind CSS and TypeScript.
          </h1>
        </div>

        <div className="my-4 max-lg:pb-20 max-lg:flex max-lg:flex-col max-lg:items-center  block sm:hidden max-sm:text-center max-sm:px-2">
          <h1 className="text-xs mt-2 text-[#767676] font-bold ">
          My main stack currently is React/Next.js/React Native in combination with Tailwind CSS and TypeScript. 
          </h1>
          
          
        </div>


      </div>
      </div>

      <div id="pro" className="flex justify-center relative bottom-[80px] pb-[100px] pt-[200px] bg-slate-50">
        <h1 className="font-bold text-2xl text-[#2D2E32] max-sm:text-xl">
        New projects coming soon.. 🤠
        </h1>
      </div>


      <div className="flex flex-col align-center justify-start items-start ">
        <div className="mx-auto">

        <h1 id="contact" className="text-[17px] my-2 font-bold item-start flex justify-start text-[#147EFB]">
        CONTACT
        </h1>

        <h1 className="text-[25px] my-4 font-bold text-[#2D2E32]">
        Don&apos;t be shy! Hit me up! 👇
        </h1>

        <div className="flex flex-row my-12 max-sm:flex-col">
          <div className="flex flex-row mr-8">
            <Image
            src={s}
            alt="ds"
            />
            <div className="">
              <h1 className="text-[#2D2E32] font-bold">
              Location
              </h1>
              <h1 className="text-[#767676]">
              Karachi, Pakistan
              </h1>
            </div>

          </div>
          <div className="flex flex-row">
          <Image
            src={s1}
            alt="dss"
            />

<div className="">
              <h1 className="text-[#2D2E32] font-bold">
              Mail
              </h1>
              <a href="mailto:tahak6715@gmail.com">
              <h1 className="text-[#767676] hover:text-blue-400">
              tahak6715@gmail.com
              </h1>
              </a>
            </div>

          </div>
        </div>
        </div>


      </div>

      <div className="bg-[#2D2E32] py-8 flex justify-center">
        <h1 className="text-[#FFFFFF] font-bold max-sm:text-sm ">
        Copyright © 2024. All rights are reserved

        </h1>
      </div>
      
    </main>
  );
}
