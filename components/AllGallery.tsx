"use client";

import Carousel from "@/components/ui/carousel";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { HeroParallax } from "./ui/hero-parallax";
import {productslst} from "../data/galleryData"

const AllGallery = () => {
  
  return <HeroParallax products={productslst} />;
}

export default AllGallery