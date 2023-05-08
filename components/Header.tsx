"use client"
import Link from "next/link"
import React, { useState } from "react"
import { motion } from "framer-motion"

export const Header = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    }

    return (
        <header className=" shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-lg font-bold text-gray-800 hover:text-gray-900"
                    >
                        Logo
                    </Link>
                </div>
                <div className="hidden md:block">
                    <nav className="flex space-x-10 justify-start text-primaryBlack font-[400] text-xl  ">
                        <Link href="/about">About Us</Link>
                        <Link href="/how-it-works">How It Works</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/faqs">FAQs</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4 ">
                    <Link
                        href="/login"
                        className="hover:bg-primaryBlack hover:text-primaryWhite text-primaryBlack py-2 px-6 rounded-sm"
                    >
                        LogIn
                    </Link>
                    <motion.div>
                        <Link
                            href="/signup"
                            className="bg-primaryBlack hover:scale-105 text-white py-2 px-6 rounded-sm"
                        >
                            Sign Up
                        </Link>
                    </motion.div>
                </div>
                {/* <motion.div
                    className="switch w-12 h-8 bg-primaryBlack flex justify-start rounded-full p-3 cursor-pointer items-center"
                    data-isOn={isOn}
                    onClick={toggleSwitch}
                >
                    <motion.div
                        className="w-4 h-4 bg-primaryWhite rounded-full"
                        layout
                        transition={spring}
                    />
                </motion.div> */}
            </div>
        </header>
    )
}
