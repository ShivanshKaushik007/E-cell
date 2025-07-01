"use client";

import { navItems } from "@/data";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import AllBlogssec from "../../components/AllBlogs";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { MobileHamburgerNav } from "@/components/ui/MobileHamburgerNav";
import Footer from "@/components/Footer";



const BlogPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Desktop Floating Nav */}
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Hamburger Nav */}
      <div className="block md:hidden">
        <MobileHamburgerNav navItems={navItems} />
      </div>
      <AllBlogssec />
      <Footer />
    </main>
  );
};

export default BlogPage;
