"use client";

import React from "react";
import { useParams } from "next/navigation";
import { galleryData } from "@/data/galleryData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const GalleryItemPage = () => {
    const params = useParams();
    const { id } = params;

    // Find the gallery item by id
    const galleryItem = galleryData.find(
        (item) => item.id.toString() === id?.toString()
    );

    // If not found, show fallback
    if (!galleryItem) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-4xl font-bold mb-4 text-purple-600">404</h1>
                <p className="text-xl text-gray-300">Gallery Item Not Found</p>
                <Link
                    href="/gallery"
                    className="mt-6 px-5 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition"
                >
                    Back to Gallery
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 py-12 bg-black text-white">
            <Link
                href="/gallery"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6"
            >
                <FaArrowLeft /> Back to Gallery
            </Link>

            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">{galleryItem.title}</h1>
                <p className="text-lg mb-8 text-gray-300">{galleryItem.button}</p>

                <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={galleryItem.src}
                        alt={galleryItem.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryItemPage;
