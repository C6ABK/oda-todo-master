"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white py-4 px-4 relative">
            {/* Top bar with logo and nav */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-semibold text-gray-700">
                    To Do App
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 font-semibold">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-primary hover:underline underline-offset-6"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/login"
                        className="text-gray-700 hover:text-primary hover:underline underline-offset-6"
                    >
                        Log In
                    </Link>
                    <Link
                        href="/logout"
                        className="text-gray-700 hover:text-primary hover:underline underline-offset-6"
                    >
                        Log Out
                    </Link>
                    <Link
                        href="/signup"
                        className="text-gray-700 hover:text-primary hover:underline underline-offset-6"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden font-semibold text-gray-700 hover:text-primary hover:cursor-pointer text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full right-4 bg-white border border-gray-200 rounded-md shadow-lg py-4 px-6 flex flex-col gap-4 font-semibold min-w-32 z-10">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/login"
                        className="text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Log In
                    </Link>
                    <Link
                        href="/logout"
                        className="text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Log Out
                    </Link>
                    <Link
                        href="/signup"
                        className="text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default NavBar
