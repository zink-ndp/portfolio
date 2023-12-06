"use client";

import { ButtonScrollTop } from "@/components/ui/ButtonScrollTop";

import Circle from "../components/ui/Circle";
import NavBar from "../components/NavBar";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/about/AboutMe";
import Skills from "../pages/skill/Skills";
import Projects from "../pages/projects/Projects";
import Contacts from "../pages/contact/Contacts";

export default function Home() {
  

  return (
    <>
      <main className=" scroll-smooth min-h-screen p-10 bg-white">
        <NavBar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <div className="fixed -top-96 -left-64 md:-left-32 ">
        <Circle />
      </div>
      <div className="fixed -bottom-64 -right-96 md:-right-32 ">
        <Circle />
      </div>
      <ButtonScrollTop/>
    </>
  );
}
