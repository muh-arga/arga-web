"use client";

import Link from "next/link";
import { poppins } from "@/app/ui/fonts";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: 'About', href: '#about'},
  { name: 'Skills', href: '#mySkills',},
  { name: 'Experiences', href: '#experiences'},
  { name: 'Portofolio', href: '#portofolio'},
  { name: 'Contact', href: '#contact'},
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav font-medium flex flex-row justify-between items-center align-middle w-full relative">
            <div className="logo">
                <h1 className={`${poppins.className} text-2xl sm:text-4xl lg:text-5xl font-bold text-cyan-600`}>Arga</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links hidden lg:flex flex-row justify-center gap-10">
                {links.map((link) => {
                    return(
                        <Link key={link.name} href={link.href} className="hover:text-cyan-600 transition-colors">
                            {link.name}
                        </Link>
                    )
                })}
            </div>

            {/* Desktop Actions */}
            <div className="actions hidden sm:block">
                <Link href="https://bit.ly/arga-cv" target="_blank" className="rounded-md border-cyan-600 border-2 px-3 py-2 text-sm font-semibold text-cyan-600 shadow-xs hover:bg-cyan-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                    My CV
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden p-2 text-cyan-600"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu}></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className={`${poppins.className} text-2xl font-bold text-cyan-600`}>Menu</h2>
                        <button onClick={closeMenu} className="p-2 text-cyan-600">
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        {links.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-lg hover:text-cyan-600 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <Link 
                                href="https://bit.ly/arga-cv" 
                                target="_blank" 
                                className="block w-full text-center rounded-md border-cyan-600 border-2 px-3 py-2 text-sm font-semibold text-cyan-600 shadow-xs hover:bg-cyan-600 hover:text-white transition-colors"
                                onClick={closeMenu}
                            >
                                My CV
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}