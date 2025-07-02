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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 pb-20 gap-8 sm:px-8 lg:px-40 sm:py-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col gap-8 sm:gap-[32px] row-start-2 items-center sm:items-start w-full max-w-7xl">
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left lg:pe-15">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-lg sm:text-2xl font-medium mx-auto lg:mx-0">
              Welcome
            </div>
            <div className="headline text-3xl sm:text-4xl lg:text-6xl font-semibold mt-4">
              Crafting <span className="font-bold text-cyan-600">Fullstack</span>{" "}
              Solutions
            </div>
            <div className="describe pt-4 lg:pt-6">
              <p className="text-sm sm:text-base">
                I'm Arga, a Fullstack Developer helping businesses grow through thoughtful web solutions.
              </p>
            </div>
            <div className="actions pt-4 lg:pt-6 flex flex-col sm:flex-row gap-2 items-center lg:items-start">
              <button className="w-full sm:w-auto rounded-md bg-cyan-600 border-cyan-600 border-2 px-3 py-2 text-sm text-white shadow-xs hover:bg-white hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contact Me
              </button>
              <Link href="https://bit.ly/arga-portofolio" target="_blank" className="w-full sm:w-auto flex gap-2 justify-center rounded-md bg-white px-3 py-2 text-sm hover:bg-cyan-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View Portofolio <MoveUpRight />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative bg-cyan-600 w-fit">
                <Image
                  alt="Muh. Arga Swara Iskandar"
                  src={"/arga.png"}
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
                />
                <div className="absolute border-2 sm:border-5 border-black top-8 sm:top-15 right-8 sm:right-20 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex lg:block justify-center lg:justify-start order-last">
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-10 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
              <span className="text-xs sm:text-sm lg:transform lg:rotate-90">Follow me on:</span>
              <div className="border-b lg:border-r lg:border-b-0 border-gray-300 w-10 lg:w-0 lg:h-20 h-0 my-1"></div>
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 text-cyan-600">
                <Link href="https://instagram.com/arga.swara_" target="_blank">
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </Link>
                <Link href="https://linkedin.com/in/arga-swara" target="_blank">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 mt-16 sm:mt-50 w-full">
          <div id="clients" className="flex flex-col text-center sm:text-left">
            <span className="text-4xl sm:text-6xl font-bold text-cyan-600">80+</span>
            <p className="text-lg sm:text-2xl font-light">Satisfied clients</p>
          </div>

          <div
            id="completed"
            className="flex justify-center sm:border-l border-cyan-600 text-center"
          >
            <div className="flex flex-col">
              <span className="text-4xl sm:text-6xl font-bold text-cyan-600">200+</span>
              <p className="text-lg sm:text-2xl font-light">Projects completed</p>
            </div>
          </div>

          <div
            id="review"
            className="flex justify-center sm:border-l border-cyan-600 text-center"
          >
            <div className="flex flex-col">
              <span className="text-4xl sm:text-6xl font-bold text-cyan-600">99+</span>
              <p className="text-lg sm:text-2xl font-light">Reviews given</p>
            </div>
          </div>
        </section>

        <section id="mySkills" className="grid grid-cols-1 lg:grid-cols-2 mt-16 sm:mt-50 gap-8 lg:gap-4 w-full">
          <div className="flex flex-col justify-center text-center lg:text-left lg:pe-28">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-lg sm:text-2xl font-medium mx-auto lg:mx-0">
              My Skills
            </div>
            <div className="headline text-3xl sm:text-4xl lg:text-6xl font-semibold mt-4">
              Why Hire Me For Your Next{" "}
              <span className="font-bold text-cyan-600">Project?</span>
            </div>
            <div className="describe pt-4 lg:pt-6">
              <p className="text-sm sm:text-base">
                I'm a Fullstack Developer with a passion for building scalable, user-focused web applications. I specialize in solving technical challenges with modern tools and clean code.
              </p>
            </div>
            <div className="actions pt-4 lg:pt-6 flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto rounded-md bg-cyan-600 border-cyan-600 border-2 px-3 py-2 text-sm text-white shadow-xs hover:bg-white hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Hire Me
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:gap-4">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full sm:w-1/2 lg:w-1/2 wrapper text-center lg:text-left">
                <BrainCircuit size={32} className="text-cyan-600 mb-4 mx-auto lg:mx-0" />
                <p className="text-xl sm:text-2xl font-bold">Problem Solving</p>
                <p className="text-sm sm:text-base">I don't just write code, I solve problems with thoughtful engineering.</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full sm:w-1/2 lg:w-1/2 wrapper text-center lg:text-left">
                <Gauge size={32} className="text-cyan-600 mb-4 mx-auto lg:mx-0" />
                <p className="text-xl sm:text-2xl font-bold">Focus on Performance</p>
                <p className="text-sm sm:text-base">My apps don't just work — they're fast, responsive, and optimized.</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="w-full sm:w-1/2 lg:w-1/2 wrapper text-center lg:text-left">
                <CheckCircle size={32} className="text-cyan-600 mb-4 mx-auto lg:mx-0" />
                <p className="text-xl sm:text-2xl font-bold">Reliable Delivery</p>
                <p className="text-sm sm:text-base">Committed to deadlines, clear communication, and long-term value.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="flex flex-col mt-16 sm:mt-50 gap-4 w-full">
          <div className="flex flex-col text-center lg:text-left lg:pe-28 lg:w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-lg sm:text-2xl font-medium mx-auto lg:mx-0">
              Experiences
            </div>
            <div className="headline text-3xl sm:text-4xl lg:text-6xl font-semibold mt-4">
              My Experiences as
              <span className="font-bold text-cyan-600"> A Professional</span>
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            <VerticalTabs />
          </div>
        </section>

        <section
          id="portofolio"
          className="flex flex-col lg:flex-row mt-16 sm:mt-20 gap-8 lg:gap-4 w-full justify-center items-center"
        >
          <div className="flex flex-col text-center lg:text-left lg:pe-28 lg:w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-lg sm:text-2xl font-medium mx-auto lg:mx-0">
              Portofolio
            </div>
            <div className="headline text-3xl sm:text-4xl lg:text-6xl font-semibold mt-4">
              Featured
              <span className="font-bold text-cyan-600"> Projects</span>
            </div>
            <div className="describe pt-4 lg:pt-6">
              <p className="text-sm sm:text-base">
                A selection of my recent work — building reliable, scalable, and user-focused web applications.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <PortofolioCarousel />
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col mt-20 sm:mt-40 gap-4 w-full justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center text-center lg:w-1/2">
            <div className="flex items-center justify-center w-fit h-auto border rounded-[50%/50%] px-1 border-cyan-600 text-cyan-600 text-lg sm:text-2xl font-medium">
              Contact
            </div>
            <div className="headline text-3xl sm:text-4xl lg:text-6xl font-semibold mt-4">
              Let's Discuss Your
              <span className="font-bold text-cyan-600"> Projects</span>
            </div>
            <div className="describe pt-4 lg:pt-6">
              <p className="text-sm sm:text-base">
                Ready to build something impactful — whether it's innovative, scalable, or simply better.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 w-full mt-6 lg:mt-10">
            <div className="contact flex flex-row gap-2 items-center justify-center sm:justify-start">
              <Link href={"https://wa.me/6281340796948"} target="_blank">
                <div className="phone bg-cyan-600 p-3 sm:p-4 rounded-[12px] w-fit">
                  <Phone size={24} className="sm:w-8 sm:h-8 text-white" />
                </div>
              </Link>
              <div className="info flex flex-col">
                <span className="text-gray-400 text-sm sm:text-base">Whatsapp</span>
                <span className="font-bold text-sm sm:text-base">+6281340796948</span>
              </div>
            </div>

            <div className="contact flex flex-row gap-2 items-center justify-center sm:justify-start">
              <Link href={"mailto:argaa946@gmail.com"} target="_blank">
                <div className="email bg-cyan-600 p-3 sm:p-4 rounded-[12px] w-fit">
                  <Mail size={24} className="sm:w-8 sm:h-8 text-white" />
                </div>
              </Link>
              <div className="info flex flex-col">
                <span className="text-gray-400 text-sm sm:text-base">Email</span>
                <span className="font-bold text-sm sm:text-base">argaa946@gmail.com</span>
              </div>
            </div>

            <div className="contact flex flex-row gap-2 items-center justify-center sm:justify-start">
              <div className="location bg-cyan-600 p-3 sm:p-4 rounded-[12px] w-fit">
                <MapPin size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="info flex flex-col">
                <span className="text-gray-400 text-sm sm:text-base">Location</span>
                <span className="font-bold text-sm sm:text-base">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}