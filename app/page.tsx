import Image from "next/image";
import Navbar from "@/app/ui/components/navbar";
import {
  MoveUpRight,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  BrainCircuit,
  Gauge,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import VerticalTabs from "@/app/ui/components/tabs";
import PortofolioCarousel from "@/app/ui/components/carousel";
import Footer from "@/app//ui/components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-40 sm:py-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="about" className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex flex-col justify-center pe-15">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-2xl font-medium">
              Welcome
            </div>
            <div className="headline text-6xl font-semibold">
              Crafting <span className="font-bold text-cyan-600">Fullstack</span>{" "}
              Solutions
            </div>
            <div className="describe pt-6">
              <p>
                I’m Arga, a Fullstack Developer helping businesses grow through thoughtful web solutions.
              </p>
            </div>
            <div className="actions pt-6 flex gap-2">
              <button className="rounded-md bg-cyan-600 border-cyan-600 border-2 px-3 py-2 text-sm text-white shadow-xs hover:bg-white hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contact Me
              </button>
              <Link href="https://bit.ly/arga-portofolio" target="_blank" className="flex gap-2 rounded-md bg-white px-3 py-2 text-sm hover:bg-cyan-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View Portofolio <MoveUpRight />
              </Link>
            </div>
          </div>

          <div className="col-span-5 grid grid-cols-3">
            <div className="col-span-2">
              <div className="relative bg-cyan-600 w-fit">
                <Image
                  alt="Muh. Arga Swara Iskandar"
                  src={"/arga.png"}
                  width={500}
                  height={500}
                />

                <div className="absolute border-5 border-black top-15 right-20 w-[400px] h-[400px] pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-10">
              <span className="text-sm transform rotate-90">Follow me on:</span>
              <div className="border-r border-gray-300 h-20 my-1"></div>
              <div className="flex flex-col gap-10 text-cyan-600">
                <Link href="https://instagram.com/arga.swara_" target="_blank">
                  <Instagram />
                </Link>
                <Link href="https://linkedin.com/in/arga-swara" target="_blank">
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="grid grid-cols-3 gap-4 mt-50 w-full">
          <div id="clients" className="flex flex-col">
            <span className="text-6xl font-bold text-cyan-600">80+</span>
            <p className="text-2xl font-light">Satisfied clients</p>
          </div>

          <div
            id="completed"
            className="flex justify-center border-l border-cyan-600"
          >
            <div className="flex flex-col">
              <span className="text-6xl font-bold text-cyan-600">200+</span>
              <p className="text-2xl font-light">Projects completed</p>
            </div>
          </div>

          <div
            id="review"
            className="flex justify-center border-l border-cyan-600"
          >
            <div className="flex flex-col">
              <span className="text-6xl font-bold text-cyan-600">99+</span>
              <p className="text-2xl font-light">Reviews given</p>
            </div>
          </div>
        </section>

        <section id="mySkills" className="grid grid-cols-2 mt-50 gap-4">
          <div className="flex flex-col justify-center pe-28">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-2xl font-medium">
              My Skills
            </div>
            <div className="headline text-6xl font-semibold">
              Why Hire Me For Your Next{" "}
              <span className="font-bold text-cyan-600">Project?</span>
            </div>
            <div className="describe pt-6">
              <p>
                I’m a Fullstack Developer with a passion for building scalable, user-focused web applications. I specialize in solving technical challenges with modern tools and clean code.
              </p>
            </div>
            <div className="actions pt-6 flex gap-2">
              <button className="rounded-md bg-cyan-600 border-cyan-600 border-2 px-3 py-2 text-sm text-white shadow-xs hover:bg-white hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Hire Me
              </button>
            </div>
          </div>

          <div className="grid">
            <div className="flex">
              <div className="w-1/2 wrapper">
                <BrainCircuit size={32} className="text-cyan-600 mb-4" />
                <p className="text-2xl font-bold">Problem Solving</p>
                <p>I don’t just write code, I solve problems with thoughtful engineering.</p>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="w-1/2 wrapper">
                <Gauge size={32} className="text-cyan-600 mb-4" />
                <p className="text-2xl font-bold">Focus on Performance</p>
                <p>My apps don’t just work — they’re fast, responsive, and optimized.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 wrapper">
                <CheckCircle size={32} className="text-cyan-600 mb-4" />
                <p className="text-2xl font-bold">Reliable Delivery</p>
                <p>Committed to deadlines, clear communication, and long-term value.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="flex flex-col mt-50 gap-4 w-full">
          <div className="flex flex-col pe-28 w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-2xl font-medium">
              Experiences
            </div>
            <div className="headline text-6xl font-semibold">
              My Experiences as
              <span className="font-bold text-cyan-600"> A Professional</span>
            </div>
          </div>

          <div className="mt-10">
            <VerticalTabs />
          </div>
        </section>

        <section
          id="portofolio"
          className="flex flex-row mt-20 gap-4 w-full justify-center items-center"
        >
          <div className="flex flex-col pe-28 w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-2xl font-medium">
              Portofolio
            </div>
            <div className="headline text-6xl font-semibold">
              Featured
              <span className="font-bold text-cyan-600"> Projects</span>
            </div>
            <div className="describe pt-6">
              <p>
                A selection of my recent work — building reliable, scalable, and user-focused web applications.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto">
            <PortofolioCarousel />
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col mt-40 gap-4 w-full justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-2xl font-medium">
              Contact
            </div>
            <div className="headline text-6xl font-semibold text-center">
              Let’s Discuss Your
              <span className="font-bold text-cyan-600"> Projects</span>
            </div>
            <div className="describe pt-6 text-center">
              <p>
                Ready to build something impactful — whether it's innovative, scalable, or simply better.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-10 w-full mt-10">
            <div className="contact flex flex-row gap-2 items-center">
              <Link href={"https://wa.me/6281340796948"} target="_blank">
                <div className="phone bg-cyan-600 p-4 rounded-[12px] w-fit">
                  <Phone size={32} className="text-white" />
                </div>
              </Link>
              <div className="info flex flex-col">
                <span className="text-gray-400">Whatsapp</span>
                <span className="font-bold">+6281340796948</span>
              </div>
            </div>

            <div className="contact flex flex-row gap-2 items-center">
              <Link href={"mailto:argaa946@gmail.com"} target="_blank">
                <div className="email bg-cyan-600 p-4 rounded-[12px] w-fit">
                  <Mail size={32} className="text-white" />
                </div>
              </Link>
              <div className="info flex flex-col">
                <span className="text-gray-400">Email</span>
                <span className="font-bold">argaa946@gmail.com</span>
              </div>
            </div>

            <div className="contact flex flex-row gap-2 items-center">
              <div className="location bg-cyan-600 p-4 rounded-[12px] w-fit">
                <MapPin size={32} className="text-white" />
              </div>
              <div className="info flex flex-col">
                <span className="text-gray-400">Location</span>
                <span className="font-bold">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
