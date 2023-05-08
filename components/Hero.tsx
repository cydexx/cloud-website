"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
    return (
        <motion.div className="pt-[400px] block mx-auto container items-center justify-center h-screen">
            <div className="justify-between ">
                <motion.h1 className="text-7xl  ">
                    Always Track & Analyze Your Business Statistics To Succeed.
                </motion.h1>

                <p className="text-lg ">
                    A better way to manage your sales, team, clients & marketing
                    — on a single platform. Powerful, affordable & easy.
                </p>
                <div>enter email</div>
            </div>
            <div className="">
                <Image
                    src="/assets/hero.png"
                    alt="hero svg"
                    width={550}
                    height={580}
                />
            </div>
        </motion.div>
    )
}
