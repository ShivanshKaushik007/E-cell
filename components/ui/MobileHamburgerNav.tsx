"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const navVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
};

export const MobileHamburgerNav = ({
    navItems,
}: {
    navItems: { name: string; link: string; icon?: JSX.Element }[];
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger button - visible only on mobile */}
            <div className="fixed top-6 right-6 z-[6000] md:hidden">
                <button onClick={() => setOpen(true)}>
                    <FaBars size={28} color="#fff" />
                </button>
            </div>

            {/* Overlay Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={navVariants}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-[80vw] h-full bg-[#111928] text-white z-[6000] px-6 py-8 shadow-lg"
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setOpen(false)}>
                                <FaTimes size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navItems.map((navItem, idx) => (
                                <Link
                                    key={idx}
                                    href={`/${navItem.link}`}
                                    onClick={() => setOpen(false)}
                                    className="text-lg flex items-center gap-3 hover:text-purple-400"
                                >
                                    <span>{navItem.icon}</span>
                                    <span>{navItem.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
