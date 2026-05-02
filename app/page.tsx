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

      {/* Services Section */}
      <div className="w-full py-40 flex flex-col gap-10 px-6 items-center justify-center relative">
        <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md" >
          Our Services
        </div>
        <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
          <h1 className="mb-6 text-4xl text-center font-medium leading-10 md:leading-15 tracking-tighter text-heading md:text-5xl">
            AI Solutions That Take Your Business to the Next Level
          </h1>
          <p className="mb-8 text-center max-w-xl text-white/90 font-normal text-md md:text-md">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>

        <div className="flex items-center justfiy-center flex-col gap-10">
          {/* Service Card */}
          <section className="bg-neutral-primary">
            <div className="py-8 px-4 mx-auto max-w-5xl g:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium w-fit mb-5 leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                  Workflow Automation
                </div>
                <h1 className=" text-2xl font-semibold mb-3 text-left tracking-tighter text-heading md:text-5xl lg:text-4xl">
                  We invest in the world’s potential
                </h1>
                <p className="mb-6 text-white/80 font-medium text-left tracking-tighter text-heading md:text-base">
                  Here at Flowbite we focus on markets where technology, innovation, and
                  capital can unlock long-term value and drive economic growth.
                </p>
                <div className="flex flex-row gap-2">
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                </div>
              </div>

              {/* Mockup */}
              <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-10 md:pb-0 relative overflow-hidden">
                <div className="w-full h-full bg-black rounded-xl border-white/20 border flex items-center justify-center flex-col gap-3 p-5">
                  <div className="h-15 w-15 rounded-full border border-white/20 relatice overflow-hidden">
                    <Plasma
                      color="#DC2626"
                      speed={0.6}
                      direction="forward"
                      scale={1.1}
                      opacity={0.8}
                      mouseInteractive={true}
                    />
                  </div>
                  <h1 className="text-base text-center font-medium  tracking-tighter text-heading md:text-xl">
                    What can i help you automate?
                  </h1>
                  <p className="text-center max-w-xl text-white/90 font-normal text-xs md:text-md">
                    We design, develop, and implement automation tools that help you work smarter, not harder
                  </p>
                  <form action="" className="w-full">
                    <div className="w-full flex flex-col gap-3 border border-white/20 rounded-md focus:none p-3">
                      <div className="flex items-center justify-center">
                        <input type="text" className="w-full text-xs text-white/40" defaultValue={'Hello, world!'} />
                        <div className="w-fit border-white/20 border p-1 rounded-[3px] flex items-center justify-center">
                          <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>send</span>
                        </div>
                      </div>
                      <div className="w-fit border-white/20 border p-1 px-2 flex gap-1 bg-zinc-950 rounded-full items-center justify-center" style={{ fontSize: '10px' }}>
                        <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>add</span>
                        add documents
                      </div>
                    </div>
                  </form>
                </div>
                <div className="absolute right-0 left-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent">
                </div>
              </div>
            </div>
          </section>

          {/* Service Card */}
          <section className="bg-neutral-primary">
            <div className="py-8 px-4 mx-auto max-w-5xl g:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

              {/* Mockup */}
              <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-10 md:pb-0 relative overflow-hidden">
                <div className="w-full h-full bg-black rounded-xl border-white/20 border flex items-center justify-center flex-col gap-3 p-5">
                  <div className="h-15 w-15 rounded-full border border-white/20 relatice overflow-hidden">
                    <Plasma
                      color="#DC2626"
                      speed={0.6}
                      direction="forward"
                      scale={1.1}
                      opacity={0.8}
                      mouseInteractive={true}
                    />
                  </div>
                  <h1 className="text-base text-center font-medium  tracking-tighter text-heading md:text-xl">
                    What can i help you automate?
                  </h1>
                  <p className="text-center max-w-xl text-white/90 font-normal text-xs md:text-md">
                    We design, develop, and implement automation tools that help you work smarter, not harder
                  </p>
                  <form action="" className="w-full">
                    <div className="w-full flex flex-col gap-3 border border-white/20 rounded-md focus:none p-3">
                      <div className="flex items-center justify-center">
                        <input type="text" className="w-full text-xs text-white/40" defaultValue={'Hello, world!'} />
                        <div className="w-fit border-white/20 border p-1 rounded-[3px] flex items-center justify-center">
                          <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>send</span>
                        </div>
                      </div>
                      <div className="w-fit border-white/20 border p-1 px-2 flex gap-1 bg-zinc-950 rounded-full items-center justify-center" style={{ fontSize: '10px' }}>
                        <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>add</span>
                        add documents
                      </div>
                    </div>
                  </form>
                </div>
                <div className="absolute right-0 left-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent">
                </div>
              </div>


              <div className="flex flex-col justify-center">
                <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium w-fit mb-5 leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                  Workflow Automation
                </div>
                <h1 className=" text-2xl font-semibold mb-3 text-left tracking-tighter text-heading md:text-5xl lg:text-4xl">
                  We invest in the world’s potential
                </h1>
                <p className="mb-6 text-white/80 font-medium text-left tracking-tighter text-heading md:text-base">
                  Here at Flowbite we focus on markets where technology, innovation, and
                  capital can unlock long-term value and drive economic growth.
                </p>
                <div className="flex flex-row gap-2">
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Service Card */}
          <section className="bg-neutral-primary">
            <div className="py-8 px-4 mx-auto max-w-5xl g:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium w-fit mb-5 leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                  Workflow Automation
                </div>
                <h1 className=" text-2xl font-semibold mb-3 text-left tracking-tighter text-heading md:text-5xl lg:text-4xl">
                  We invest in the world’s potential
                </h1>
                <p className="mb-6 text-white/80 font-medium text-left tracking-tighter text-heading md:text-base">
                  Here at Flowbite we focus on markets where technology, innovation, and
                  capital can unlock long-term value and drive economic growth.
                </p>
                <div className="flex flex-row gap-2">
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                </div>
              </div>

              {/* Mockup */}
              <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-10 md:pb-0 relative overflow-hidden">
                <div className="w-full h-full bg-black rounded-xl border-white/20 border flex items-center justify-center flex-col gap-3 p-5">
                  <div className="h-15 w-15 rounded-full border border-white/20 relatice overflow-hidden">
                    <Plasma
                      color="#DC2626"
                      speed={0.6}
                      direction="forward"
                      scale={1.1}
                      opacity={0.8}
                      mouseInteractive={true}
                    />
                  </div>
                  <h1 className="text-base text-center font-medium  tracking-tighter text-heading md:text-xl">
                    What can i help you automate?
                  </h1>
                  <p className="text-center max-w-xl text-white/90 font-normal text-xs md:text-md">
                    We design, develop, and implement automation tools that help you work smarter, not harder
                  </p>
                  <form action="" className="w-full">
                    <div className="w-full flex flex-col gap-3 border border-white/20 rounded-md focus:none p-3">
                      <div className="flex items-center justify-center">
                        <input type="text" className="w-full text-xs text-white/40" defaultValue={'Hello, world!'} />
                        <div className="w-fit border-white/20 border p-1 rounded-[3px] flex items-center justify-center">
                          <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>send</span>
                        </div>
                      </div>
                      <div className="w-fit border-white/20 border p-1 px-2 flex gap-1 bg-zinc-950 rounded-full items-center justify-center" style={{ fontSize: '10px' }}>
                        <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>add</span>
                        add documents
                      </div>
                    </div>
                  </form>
                </div>
                <div className="absolute right-0 left-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent">
                </div>
              </div>
            </div>
          </section>


          {/* Service Card */}
          <section className="bg-neutral-primary">
            <div className="py-8 px-4 mx-auto max-w-5xl g:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

              {/* Mockup */}
              <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-10 md:pb-0 relative overflow-hidden">
                <div className="w-full h-full bg-black rounded-xl border-white/20 border flex items-center justify-center flex-col gap-3 p-5">
                  <div className="h-15 w-15 rounded-full border border-white/20 relatice overflow-hidden">
                    <Plasma
                      color="#DC2626"
                      speed={0.6}
                      direction="forward"
                      scale={1.1}
                      opacity={0.8}
                      mouseInteractive={true}
                    />
                  </div>
                  <h1 className="text-base text-center font-medium  tracking-tighter text-heading md:text-xl">
                    What can i help you automate?
                  </h1>
                  <p className="text-center max-w-xl text-white/90 font-normal text-xs md:text-md">
                    We design, develop, and implement automation tools that help you work smarter, not harder
                  </p>
                  <form action="" className="w-full">
                    <div className="w-full flex flex-col gap-3 border border-white/20 rounded-md focus:none p-3">
                      <div className="flex items-center justify-center">
                        <input type="text" className="w-full text-xs text-white/40" defaultValue={'Hello, world!'} />
                        <div className="w-fit border-white/20 border p-1 rounded-[3px] flex items-center justify-center">
                          <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>send</span>
                        </div>
                      </div>
                      <div className="w-fit border-white/20 border p-1 px-2 flex gap-1 bg-zinc-950 rounded-full items-center justify-center" style={{ fontSize: '10px' }}>
                        <span className="material-symbols-rounded tet-red-600" style={{ fontSize: '15px', fontVariationSettings: "'wght' 100", color: '#DC2626' }}>add</span>
                        add documents
                      </div>
                    </div>
                  </form>
                </div>
                <div className="absolute right-0 left-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent">
                </div>
              </div>


              <div className="flex flex-col justify-center">
                <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium w-fit mb-5 leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                  Workflow Automation
                </div>
                <h1 className=" text-2xl font-semibold mb-3 text-left tracking-tighter text-heading md:text-5xl lg:text-4xl">
                  We invest in the world’s potential
                </h1>
                <p className="mb-6 text-white/80 font-medium text-left tracking-tighter text-heading md:text-base">
                  Here at Flowbite we focus on markets where technology, innovation, and
                  capital can unlock long-term value and drive economic growth.
                </p>
                <div className="flex flex-row gap-2">
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                  <div className="text-white hover:bg-brand-strong w-fit box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md">
                    Internal Task Bots
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Process section */}
      <div className="w-full py-40 pt-0 flex flex-col gap-10 px-6 items-center justify-center relative">
        <div className="text-white hover:bg-brand-strong box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md" >
          Our Process
        </div>
        <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
          <h1 className="mb-6 text-4xl text-center font-medium leading-10 md:leading-15 tracking-tighter text-heading md:text-5xl">
            Our Simple, Smart, and Scalable Process
          </h1>
          <p className="mb-8 text-center max-w-xl text-white/90 font-normal text-md md:text-md">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>

        <div className="grid grid-cols-2 w-full gap-4 max-w-4xl">
          {/* Process Card */}
          <div className="w-full flex flex-col gap-3 h-80 col-span-1 bg-zinc-950 rounded-md border border-white/20 p-8 relative overflow-hidden">
            <div className="text-white w-fit hover:bg-brand-strong box-border border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20 backdrop-blur-md">
              Step 4
            </div>
            <h1 className="text-xl text-left font-medium tracking-tighter text-heading md:text-2xl">
              Continuous Optimization
            </h1>
            <p className="text-left text-white/70 font-medium text-sm md:text-sm">
              We refine performance, analyze insights, and enhance automation for long-term growth.
            </p>

            {/* Items list */}
            <div className="w-full flex flex-col rounded-md border border-white/10 overflow-hidden mt-2">

              {/* Chatbot system */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-white/60" style={{ fontSize: '18px', fontVariationSettings: "'wght' 200" }}>chat</span>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-semibold">Chatbot system</span>
                    <span className="text-white/40 text-xs">Efficiency will increase by 20%</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full border border-purple-500/50 flex items-center justify-center">
                  <span className="material-symbols-rounded text-purple-400" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>refresh</span>
                </div>
              </div>

              {/* Workflow system */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-white/60" style={{ fontSize: '18px', fontVariationSettings: "'wght' 200" }}>settings</span>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-semibold">Workflow system</span>
                    <span className="text-white/40 text-xs">Update available.</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-rounded text-white/60" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>arrow_upward</span>
                </div>
              </div>

              {/* Sales system */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-white/60" style={{ fontSize: '18px', fontVariationSettings: "'wght' 200" }}>filter_alt</span>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-semibold">Sales system</span>
                    <span className="text-white/40 text-xs">Up to date</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-rounded text-green-400" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>check</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
