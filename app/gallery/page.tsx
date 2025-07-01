"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { productslst } from "../../data/galleryData";

const HeroParallaxDemo = () => {
  return <HeroParallax products={productslst} />;
};

export default HeroParallaxDemo;
