"use client";
import Image from "next/image";
import Plasma from '@/components/Plasma';
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

// LogoLoop
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function Home() {
  return (
    <div className="bg-black realtive">
      {/* Navigation */}
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b bg-black border-white/10 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img height={30} width={30} src="/svg/nexus_icon_white.svg" alt="" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Nexus
            </span>
          </a>
          <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-brand-strong box-border border border-transparent font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full mt-20 relative">
        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
          <Plasma
            color="#DC2626"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
          <div className="absolute bottom-0 h-32 right-0 left-0 bg-gradient-to-b from-transparent to-black "></div>
        </div>
        <section className=" pt-20 mb-40">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <div
              className="w-auto inline-flex items-center p-1 pe-2 mb-6 text-sm text-fg-brand-strong rounded-full border border-white/20"
              role="alert"
            >
              <span className="bg-red-600 text-fg-brand-strong py-0.5 px-2 rounded-full">
                New
              </span>
              <div className="ms-2 text-sm">
                Crypto wallet savings
              </div>
              <svg
                className="w-4 h-4 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
            <h1 className="mb-6 max-w-7xl text-4xl font-semibold leading-10 md:leading-20 tracking-tighter text-heading md:text-5xl lg:text-6xl">
              NEXUS — The Self-Custody <br /> Crypto Wallet
            </h1>
            <p className="mb-8 text-white/90 font-normal text-body md:text-xl">
              A sleek, dark, modern crypto wallet targeting serious crypto users
            </p>
            <form className="w-full mx-auto flex items-center justify-center gap-3 ">
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-brand-strong box-border border border-transparent font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none"
              >
                Get in touch
              </button>
              <button
                type="button"
                className="text-white hover:bg-brand-strong box-border border border-transparent font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md"
              >
                View Services
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Tech Logos */}
      <div className=" flex items-center justify-center gap-8 flex-col relative">
        <h4 className="text-lg font-semibold text-heading">Over 50+ business trust us</h4>
        <LogoLoop
          className="max-w-5xl"
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={50}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>

    </div>


  );
}
