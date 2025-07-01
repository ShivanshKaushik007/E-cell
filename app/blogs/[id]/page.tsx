// app/blogs/[id]/page.tsx
"use client";

import React from "react";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogData";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

type BlogPageProps = {
    params: { id: string };
};

export default function BlogPage({ params }: BlogPageProps) {
    const blog = blogs.find((b) => b.id.toString() === params.id);

    if (!blog) return notFound();

    return (
        <div className="bg-[#0f0f23] min-h-screen py-12 px-4 sm:px-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
                <span className="text-purple">{blog.heading}</span>
            </h1>

            <div className="max-w-4xl mx-auto">
                <BackgroundGradient className="rounded-3xl p-6 sm:p-10 bg-[#1a1a2e] shadow-lg">
                    <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-6">
                        <Image
                            src={blog.image}
                            alt={blog.alt || "Blog Image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                        {blog.subtitle}
                    </h2>

                    <div
                        className="prose prose-invert max-w-none text-white/80 text-justify"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    <div className="mt-8 flex justify-end">
                        <span className="bg-purple text-white px-4 py-2 rounded-full font-medium text-sm">
                            Author: Rudresh Dubey
                        </span>
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
}
