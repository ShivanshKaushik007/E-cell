"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import React from "react";
import { blogs, blog_count } from "../data/blogData";

const AllBlogssec = () => {
  const filteredBlogs = blogs.filter((blog) => blog.id >= 1 && blog.id <= blog_count);

  return (
    <div className="my-[150px]" id="recentprojects">
      <h1 className="heading mb-[60px]">
        Read Our Recent <span className="text-purple">Blogs</span>
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-center p-4 gap-16 mt-10">
        {filteredBlogs.map((blog) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={blog.id}
          >
            <Link href={`/blogs/${blog.id.toString()}`}>
              <PinContainer title={blog.heading} href={`/blogs/${blog.id}`}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="z-10 absolute bottom-0 object-fill"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {blog.heading}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {blog.subtitle}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                      <img src="/icon.png" alt="icon" className="p-2" />
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    Read More
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogssec;
