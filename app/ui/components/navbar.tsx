import Link from "next/link";
import { poppins, inter } from "@/app/ui/fonts";

const links = [
  { name: 'About', href: '#about'},
  { name: 'Skills', href: '#mySkills',},
  { name: 'Experiences', href: '#experiences'},
  { name: 'Portofolio', href: '#portofolio'},
  { name: 'Contact', href: '#contact'},
];

export default function Navbar() {
    return (
        <nav className="nav font-medium flex flex-row justify-between items-center align-middle w-full">
            <div className="logo">
                <h1 className={`${poppins.className} text-4xl sm:text-5xl font-bold text-cyan-600`}>Arga</h1>
            </div>

            <div className="nav-links flex flex-row justify-center gap-10">
                {links.map((link) => {
                    return(
                        <Link key={link.name} href={link.href} className="hover:text-cyan-600">
                            {link.name}
                        </Link>
                    )
                })}
            </div>

            <div className="actions">
                <Link href="https://bit.ly/arga-cv" target="_blank" className="rounded-md border-cyan-600 border-2 px-3 py-2 text-sm font-semibold text-cyan-600 shadow-xs hover:bg-cyan-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    My CV
                </Link>
            </div>
        </nav>
    )
}