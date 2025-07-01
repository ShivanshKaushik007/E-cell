"use client";

import { FaBook } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GridGlobe } from "./ui/GridGlobe";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 overflow-hidden">
      {/* === Spotlights for background glow === */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* === Background Grid Pattern === */}
      <div
        className="absolute top-0 left-0 h-full w-full bg-white dark:bg-black-100 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      />

      {/* === Main Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
          {/* === Heading with Typing Effect === */}
          <TextGenerateEffect
            words="Transforming World with Entrepreneurship"
            className="heading mb-[60px]"
          />

          {/* === Animated Globe === */}
          <div className="w-full flex justify-center relative z-0">
            <div className="w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
              <GridGlobe />
            </div>
          </div>

          {/* === Learn More Button (anchors to #about) === */}
          <a href="#about" className="mt-40 sm:mt-60 relative z-20 w-full md:w-auto">
            <MagicButton
              title="Learn More"
              icon={<FaBook />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
