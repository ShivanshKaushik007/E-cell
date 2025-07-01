"use client";

import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { galleryData } from "../data/galleryData";
import { PinContainer } from "./ui/Pin";

const Gallerysec = () => {
    // Limit to first 4 gallery itemsz
    const filteredGallery = galleryData.slice(0, 3);

    return (
        <div className="my-[100px]" id="gallery">
            <Link href="/gallery">
                <h1 className="heading mb-[60px] flex items-center justify-center gap-3">
                    Explore Our Gallery
                    <FaLocationArrow className="text-purple-300 text-xl sm:text-2xl md:text-3xl" />
                </h1>
            </Link>



            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-center p-4 gap-16 mt-10">
                {filteredGallery.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <Link href={`/gallery/${item.id}`}>
                            <PinContainer title={item.title} href={`/blogs/${item.id}`}>
                                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.button}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                                            <img src="/icon.jpg" alt="icon" className="p-2" />
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        View More
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

export default Gallerysec;
