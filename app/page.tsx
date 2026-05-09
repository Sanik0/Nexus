"use client";
import Image from "next/image";
import Plasma from '@/components/Plasma';
import LogoLoop from "@/components/LogoLoop";
import BlurText from "@/components/BlurText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import FadeUp from "@/components/FadeUp";

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
      <div className="w-full mt-18 relative">
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
            <FadeContent blur={true} duration={3000} initialOpacity={0}>
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
            </FadeContent>
            <div className="w-full">
              <BlurText
                className="mb-6 max-w-4xl flex flex-row flex-wrap items-center justify-center text-center mx-auto text-4xl font-semibold leading-10 md:leading-20 tracking-tighter text-heading md:text-5xl lg:text-6xl"
                text=" NEXUS — The Self Custody Crypto Wallet"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </div>


            <div className="w-full flex items-center justify-center text-center">
              <BlurText
                className="mb-8 flex flex-row flex-wrap items-center justify-center mx-auto text-center text-white/90 font-normal text-body md:text-xl"
                text=" A sleek, dark, modern crypto wallet targeting serious crypto users"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </div>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1.5}
            >
              <div>
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
            </AnimatedContent>
          </div>
        </section>
      </div>

      <FadeUp delay={0.5}>
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
      </FadeUp>

      {/* Services Section */}
      <div className="w-full py-40 flex flex-col gap-10 px-6 items-center justify-center relative">
        <div className="text-white hover:bg-brand-strong box-border border border-transparent font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md" >
          Our Services
        </div>
        <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
          <h1 className="text-3xl text-center font-medium leading-10 md:leading-15 tracking-tighter text-heading md:text-5xl">
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
              <FadeUp delay={0.5}>
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
              </FadeUp>
            </div>
          </section>


          {/* Service Card */}
          <section className="bg-black">
            <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Mockup */}
              <FadeUp delay={0.5}>
                <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-8 md:pb-0 relative overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-black rounded-xl border-white/10 border flex flex-col gap-0 overflow-hidden">

                    {/* Tab bar */}
                    <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10">
                      <span className="text-white text-xs font-semibold">All Assets</span>
                      <span className="text-white/30 text-xs">Pending Swap</span>
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <span className="text-white/30 text-xs">Portfolio synced</span>
                      <span className="text-white/30 text-xs">98%</span>
                    </div>

                    {/* Token rows */}
                    {[
                      { icon: "currency_bitcoin", name: "Bitcoin", sub: "Last tx: 2 mins ago", status: "check", color: "#DC2626" },
                      { icon: "toll", name: "Ethereum", sub: "Staking active", status: "refresh", color: "#6C63FF" },
                      { icon: "account_balance_wallet", name: "Solana", sub: "Due for swap", status: "swap_horiz", color: "#6C63FF" },
                      { icon: "circle", name: "USDC", sub: "Stable · No change", status: "check", color: "#DC2626" },
                      { icon: "trending_up", name: "Arbitrum", sub: "Cancelled by user", status: "close", color: "#ffffff30" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                            <span className="material-symbols-rounded text-white/50" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>{item.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white text-xs font-semibold">{item.name}</span>
                            <span className="text-white/30 text-[10px]">{item.sub}</span>
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                          <span className="material-symbols-rounded" style={{ fontSize: '13px', fontVariationSettings: "'wght' 300", color: item.color }}>{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Fade bottom */}
                  <div className="absolute right-0 left-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                </div>
              </FadeUp>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20 mb-5">
                  Portfolio Management
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-left tracking-tighter text-white md:text-4xl lg:text-4xl">
                  All your crypto. One clean view.
                </h2>
                <p className="mb-6 text-white/50 font-normal text-left text-sm leading-relaxed">
                  Nexus tracks every token across every chain in real-time. See your full portfolio, live P&L, and pending transactions — without switching between apps.
                </p>
                <div className="flex flex-row gap-2 flex-wrap">
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    Multi-Chain Tracking
                  </div>
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    400+ Tokens Supported
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* Service Card 2 */}
          <section className="bg-black">
            <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20 mb-5">
                  DEX Swap
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-left tracking-tighter text-white md:text-4xl lg:text-4xl">
                  Swap smarter. Keep every cent.
                </h2>
                <p className="mb-6 text-white/50 font-normal text-left text-sm leading-relaxed">
                  Nexus aggregates rates across 15+ decentralized exchanges and executes the best swap automatically — all from inside your wallet. No account. No KYC. No middleman.
                </p>
                <div className="flex flex-row gap-2 flex-wrap">
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    Best Rate Guarantee
                  </div>
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    15+ DEX Sources
                  </div>
                </div>
              </div>

              {/* Mockup */}
              <FadeUp delay={0.5}>
                <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-8 md:pb-0 relative overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-black rounded-xl border border-white/10 flex flex-col gap-0 overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <span className="text-white text-xs font-semibold">Swap Tokens</span>
                      <span className="text-white/30 text-[10px]">Best rate selected</span>
                    </div>

                    {/* From */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/30 text-[10px]">You pay</span>
                        <span className="text-white text-lg font-semibold">0.5 ETH</span>
                      </div>
                      <div className="flex items-center gap-2 bg-zinc-900 border border-white/10 rounded-full px-3 py-1.5">
                        <span className="material-symbols-rounded text-white/60" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>toll</span>
                        <span className="text-white text-xs font-medium">ETH</span>
                      </div>
                    </div>

                    {/* Swap arrow */}
                    <div className="flex items-center justify-center py-2 border-b border-white/10">
                      <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                        <span className="material-symbols-rounded text-red-500" style={{ fontSize: '16px', fontVariationSettings: "'wght' 300" }}>swap_vert</span>
                      </div>
                    </div>

                    {/* To */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/30 text-[10px]">You receive</span>
                        <span className="text-white text-lg font-semibold">892.4 USDC</span>
                      </div>
                      <div className="flex items-center gap-2 bg-zinc-900 border border-white/10 rounded-full px-3 py-1.5">
                        <span className="material-symbols-rounded text-white/60" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>paid</span>
                        <span className="text-white text-xs font-medium">USDC</span>
                      </div>
                    </div>

                    {/* Rate info */}
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-white/30 text-[10px]">Rate via Uniswap V3</span>
                      <span className="text-green-400 text-[10px] font-medium">Best available ✓</span>
                    </div>

                    {/* CTA */}
                    <div className="px-4 py-3">
                      <div className="w-full bg-red-600/20 border border-red-600/30 rounded-md py-2 flex items-center justify-center gap-2">
                        <span className="material-symbols-rounded text-red-500" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>bolt</span>
                        <span className="text-red-400 text-xs font-medium">Confirm Swap</span>
                      </div>
                    </div>

                  </div>

                  {/* Fade bottom */}
                  <div className="absolute right-0 left-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>
          </section>


          {/* Service Card 3 */}
          <section className="bg-black">
            <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Mockup */}
              <FadeUp delay={0.5}>
                <div className="w-full h-80 bg-zinc-950 rounded-2xl p-5 pb-0 md:p-8 md:pb-0 relative overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-black rounded-xl border border-white/10 flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <span className="text-white text-xs font-semibold">Security Center</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-green-400 text-[10px]">All systems secure</span>
                      </div>
                    </div>

                    {/* Security items */}
                    {[
                      { icon: "fingerprint", label: "Biometric Unlock", sub: "Face ID active", status: "Enabled", color: "text-green-400" },
                      { icon: "lock", label: "256-bit Encryption", sub: "AES local encryption", status: "Active", color: "text-green-400" },
                      { icon: "visibility_off", label: "Anti-Phishing", sub: "Protection layer on", status: "Enabled", color: "text-green-400" },
                      { icon: "cloud_off", label: "Cloud Backup", sub: "Disabled by you", status: "Off", color: "text-white/30" },
                      { icon: "usb", label: "Hardware Wallet", sub: "Ledger connected", status: "Paired", color: "text-red-400" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                            <span className="material-symbols-rounded text-white/50" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>{item.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white text-xs font-semibold">{item.label}</span>
                            <span className="text-white/30 text-[10px]">{item.sub}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-medium ${item.color}`}>{item.status}</span>
                      </div>
                    ))}

                  </div>

                  {/* Fade bottom */}
                  <div className="absolute right-0 left-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                </div>
              </FadeUp>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20 mb-5">
                  Security
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-left tracking-tighter text-white md:text-4xl lg:text-4xl">
                  Your vault. Your rules. Zero exceptions.
                </h2>
                <p className="mb-6 text-white/50 font-normal text-left text-sm leading-relaxed">
                  Nexus is built on a zero-knowledge architecture. Your private keys never leave your device. No cloud sync, no backdoors, no third-party access — ever. Audited, open-source, and yours alone.
                </p>
                <div className="flex flex-row gap-2 flex-wrap">
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    Open Source
                  </div>
                  <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-3 py-2 border-white/20">
                    Publicly Audited
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>

      {/* Process section */}
      <div className="w-full py-20 flex flex-col gap-10 px-6 items-center justify-center relative">

        <div className="text-white border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">
          How It Works
        </div>

        <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
          <h1 className="text-3xl text-center max-w-xl font-medium leading-10 md:leading-15 tracking-tighter text-white md:text-5xl">
            Set up in minutes. Secure for life.
          </h1>
          <p className="text-center max-w-xl text-white/50 font-normal text-sm">
            Getting started with Nexus is simple. No bank. No KYC. No waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 max-w-4xl">

          {/* Step 1 - Pie chart style mockup */}
          <FadeUp delay={0.5}>
            <div className="w-full h-full flex flex-col gap-3 bg-zinc-950 rounded-xl border border-white/10 p-6 relative overflow-hidden">
              <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">Step 1</div>
              <h3 className="text-2xl font-medium tracking-tighter text-white">Download & Install</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Get Nexus on iOS, Android, or as a Chrome extension. Free forever, no account required.
              </p>

              {/* Mockup: two-column layout like step 1 in screenshot */}
              <div className="w-full flex gap-3 mt-2 rounded-lg overflow-hidden border border-white/10">
                {/* Left: visual */}
                <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-32">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#ffffff10" strokeWidth="10" />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#DC2626" strokeWidth="10"
                        strokeDasharray="75 113" strokeLinecap="round" />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#DC262660" strokeWidth="10"
                        strokeDasharray="30 158" strokeDashoffset="-75" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">98%</span>
                    </div>
                  </div>
                  <p className="text-white/30 text-[10px] absolute bottom-3 left-4">Scanning devices...</p>
                </div>
                {/* Right: checklist */}
                <div className="flex-1 bg-zinc-900/50 flex flex-col divide-y divide-white/5">
                  {[
                    { icon: "phone_iphone", label: "iOS App" },
                    { icon: "android", label: "Android" },
                    { icon: "extension", label: "Chrome" },
                    { icon: "desktop_windows", label: "macOS Beta" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2.5">
                      <span className="material-symbols-rounded text-white/40" style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>{item.icon}</span>
                      <span className="text-white/70 text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Step 2 - Code editor style mockup */}
          <FadeUp delay={1}>
            <div className="w-full flex flex-col gap-3 bg-zinc-950 rounded-xl border border-white/10 p-6 relative overflow-hidden">
              <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">Step 2</div>
              <h3 className="text-2xl font-medium tracking-tighter text-white">Create Your Wallet</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Your seed phrase is generated locally and never leaves your device. Ever.
              </p>

              {/* Mockup: code editor */}
              <div className="w-full mt-2 rounded-lg overflow-hidden border border-white/10 bg-black font-mono">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-zinc-900/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="flex-1 mx-2 bg-zinc-800 rounded h-4" />
                </div>
                {/* Code lines */}
                <div className="p-4 flex flex-col gap-1.5 text-[11px]">
                  <p><span className="text-white/20">01</span> <span className="text-white/30">const</span> <span className="text-red-400">wallet</span> <span className="text-white/30">=</span> <span className="text-white/50">nexus</span><span className="text-white/30">.</span><span className="text-red-300">create</span><span className="text-white/30">()</span></p>
                  <p><span className="text-white/20">02</span> <span className="text-white/30">const</span> <span className="text-red-400">seed</span> <span className="text-white/30">=</span> <span className="text-white/50">wallet</span><span className="text-white/30">.</span><span className="text-red-300">generateSeed</span><span className="text-white/30">(24)</span></p>
                  <p><span className="text-white/20">03</span> <span className="text-white/30">wallet</span><span className="text-red-300">.encrypt</span><span className="text-white/30">(</span><span className="text-white/50">'AES-256'</span><span className="text-white/30">)</span></p>
                  <p><span className="text-white/20">04</span> <span className="text-white/30">wallet</span><span className="text-red-300">.enableBiometrics</span><span className="text-white/30">(</span><span className="text-white/50">true</span><span className="text-white/30">)</span></p>
                  <p><span className="text-white/20">05</span> <span className="text-green-400/70">// ✓ Wallet secured locally</span></p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Step 3 - Integration/connect style */}
          <FadeUp delay={1.5}>
            <div className="w-full h-full h-fill flex flex-col gap-3 bg-zinc-950 rounded-xl border border-white/10 p-6 relative overflow-hidden">
              <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">Step 3</div>
              <h3 className="text-2xl font-medium tracking-tighter text-white">Add Your Assets</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Import existing wallets or receive crypto directly. Nexus auto-detects tokens across all chains.
              </p>

              {/* Mockup: connection diagram */}
              <div className="w-full mt-2 rounded-lg border border-white/10 bg-black p-4 flex items-center justify-between gap-3">
                {/* Nexus side */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <img src="/svg/nexus_icon_white.svg" className="w-7 h-7 opacity-80" alt="Nexus" />
                  </div>
                  <span className="text-white/40 text-[10px]">Nexus</span>
                </div>

                {/* Connecting lines */}
                <div className="flex-1 flex flex-col gap-2">
                  {["BTC", "ETH", "SOL"].map((chain, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="flex-1 h-px bg-gradient-to-r from-red-600/80 to-white/10" />
                      <span className="text-[9px] text-white/30 px-1">{chain}</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-red-600/80 to-white/10" />
                    </div>
                  ))}
                </div>

                {/* Chains side */}
                <div className="flex flex-col items-center gap-1.5">
                  {[
                    { icon: "currency_bitcoin", label: "Bitcoin" },
                    { icon: "toll", label: "Ethereum" },
                    { icon: "circle", label: "Solana" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-zinc-900 border border-white/10 rounded-full px-2 py-1">
                      <span className="material-symbols-rounded text-white/50" style={{ fontSize: '12px', fontVariationSettings: "'wght' 300" }}>{item.icon}</span>
                      <span className="text-white/50 text-[10px]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Step 4 - Status list style */}
          <FadeUp delay={2}>
            <div className="w-full h-full h-fill flex flex-col gap-3 bg-zinc-950 rounded-xl border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />
              <div className="text-white w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">Step 4</div>
              <h3 className="text-2xl font-medium tracking-tighter text-white">Trade, Swap & Grow</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Swap tokens, track P&L, and connect to DeFi — all without leaving Nexus.
              </p>

              <div className="w-full flex flex-col rounded-md border border-white/10 overflow-hidden mt-2">
                {[
                  { icon: "swap_horiz", label: "DEX Swap", sub: "Best rate across 15 sources", status: "check", color: "text-green-400", borderColor: "border-green-500/30" },
                  { icon: "bar_chart", label: "Portfolio Tracker", sub: "P&L up +12.4% this week", status: "trending_up", color: "text-green-400", borderColor: "border-green-500/30" },
                  { icon: "usb", label: "Hardware Wallet", sub: "Ledger update available", status: "arrow_upward", color: "text-red-400", borderColor: "border-red-500/30" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-rounded text-white/50" style={{ fontSize: '16px', fontVariationSettings: "'wght' 300" }}>{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-semibold">{item.label}</span>
                        <span className="text-white/30 text-[10px]">{item.sub}</span>
                      </div>
                    </div>
                    <div className={`w-7 h-7 rounded-full border ${item.borderColor} flex items-center justify-center`}>
                      <span className={`material-symbols-rounded ${item.color}`} style={{ fontSize: '14px', fontVariationSettings: "'wght' 300" }}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>


        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full py-40 pt-0 flex flex-col gap-10 px-6 items-center justify-center relative">
        <div className="text-white hover:bg-brand-strong box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md" >
          Case Studies
        </div>
        <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
          <h1 className="text-3xl text-center font-medium leading-10 md:leading-15 tracking-tighter text-heading md:text-5xl">
            See How Smart AI Automation Transforms Businesses
          </h1>
          <p className="mb-8 text-center max-w-xl text-white/90 font-normal text-md md:text-md">
            See how AI automation streamlines operations, boosts and drives growth.
          </p>
        </div>

        <div className="grid w-full  gap-7 max-w-4xl">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-10 p-2">

                    {/* Image */}
                    <div className="overflow-hidden rounded-lg w-full md:w-1/2 shrink-0 bg-red-600 h-[300px] md:h-[450px]">
                      <img className="w-full h-full object-cover" src="https://picsum.photos/id/26/200/300" alt="" />
                    </div>

                    {/* Text */}
                    <div className="w-full flex flex-col gap-4">
                      <span className="text-2xl font-medium">Logo Ipsum</span>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-medium">"Ai-Driven Faster Forecasting cut inventory waste by 40% for Trailforge"</h1>
                        <p className="text-[14px] text-white/80">Trailforge, a Suitcase brand, faced stock market issues and inefficiencies. By implementing AI-driven forecasting, they reduced inventory waste by 40% and improved demand planning.</p>
                      </div>
                      <p className="text-md text-white">Impact:</p>
                      <ul className="list-disc list-inside pl-4 text-[16px]">
                        <li>40% Less Inventory Waste</li>
                        <li>35% Faster Production</li>
                        <li>20% More accurate forecasting</li>
                        <li>25% Faster Fulfillment</li>
                      </ul>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="w-full text-center font-medium text-md mt-5 text-white/70">←  DRAG TO EXPLORE  →</p>
        </div>
      </div>

      {/* Gird Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col w-full items-center justify-center">
            <div className="text-white mb-10 w-fit hover:bg-brand-strong box-border border font-medium leading-5 rounded-md text-sm px-3 py-2 border-white/20 backdrop-blur-md" >
              Benefits
            </div>
            <div className="w-full max-w-4xl flex items-center justify-center gap-2 flex-col">
              <h1 className="text-3xl text-center font-medium leading-10 md:leading-15 tracking-tighter text-heading md:text-5xl">
                The Key Benefits of AI for Your Business Growth
              </h1>
              <p className="mb-8 text-center max-w-xl text-white/90 font-normal text-md md:text-md">
                Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>key</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">True Self-Custody</h3>
                <p className="text-sm text-white/60 leading-relaxed">Your private keys are generated and stored only on your device. Nexus has zero access. Zero.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>lan</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Multi-Chain Native</h3>
                <p className="text-sm text-white/60 leading-relaxed">Ethereum, Solana, Bitcoin, BNB Chain, Polygon, Arbitrum — manage everything in one place.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>swap_horiz</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Built-In DEX Swap</h3>
                <p className="text-sm text-white/60 leading-relaxed">Swap tokens directly inside your wallet at the best rates across 15+ decentralized exchanges. No account needed.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>shield</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">256-bit Encryption</h3>
                <p className="text-sm text-white/60 leading-relaxed">Military-grade AES encryption protects your wallet locally. No cloud. No exposure. No compromise.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

            {/* Card 5 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>bar_chart</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Portfolio Tracker</h3>
                <p className="text-sm text-white/60 leading-relaxed">Track your entire crypto portfolio across all chains in real-time. P&L, history, and insights in one dashboard.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

            {/* Card 6 */}
            <div className="flex flex-col gap-4 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="w-9 h-9 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'wght' 300" }}>usb</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Hardware Wallet Bridge</h3>
                <p className="text-sm text-white/60 leading-relaxed">Pair with Ledger or Trezor in seconds for cold storage without ever leaving the Nexus interface.</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-18 bg-red-600/40 blur-2xl rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-black">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">

          {/* Header */}
          <div className="flex flex-col w-full items-center justify-center mb-12">
            <div className="text-white mb-4 w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">
              Pricing
            </div>
            <h1 className="text-3xl text-center font-medium tracking-tighter text-white md:text-5xl mb-3">
              The Right Plan for Every Holder
            </h1>
            <p className="text-center max-w-xl text-white/50 text-sm">
              Start free, scale when ready. No hidden fees, no surprises.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Starter */}
            <div className="flex flex-col p-6 bg-black rounded-lg border border-white/10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-rounded text-white/60" style={{ fontSize: '20px', fontVariationSettings: "'wght' 300" }}>rocket_launch</span>
                <h3 className="text-lg font-semibold text-white">Core</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-medium text-white">Free</span>
              </div>
              <p className="text-white/90 text-sm mb-6">
                Perfect for crypto newcomers getting started with self-custody.
              </p>
              <a href="#" className="w-full text-center text-white font-medium text-sm py-2 rounded-lg border bg-white/5 border-white/20 transition mb-8">
                Get Started
              </a>
              <p className="text-white/40 text-xs mb-4">What's Included:</p>
              <ul className="space-y-3">
                {["1 Wallet", "5 Supported Chains", "Built-In DEX Swap", "Basic Portfolio Tracker", "Biometric Unlock"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="material-symbols-rounded text-white/40" style={{ fontSize: '16px', fontVariationSettings: "'wght' 300" }}>check</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro - highlighted */}
            <div className="flex flex-col p-6 bg-black rounded-lg border border-white/10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />
              {/* Popular badge */}
              <div className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-sm text-white border border-white/10">
                Popular
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-rounded text-red-500" style={{ fontSize: '20px', fontVariationSettings: "'wght' 300" }}>bolt</span>
                <h3 className="text-lg font-semibold text-white">Pro</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">$9</span>
                <span className="tex-white text-sm">/month</span>
              </div>
              <p className="text-white/90 text-sm mb-6">
                For active traders who need multi-chain power and better rates.
              </p>
              <a href="#" className="w-full text-center text-white font-medium text-sm py-2 rounded-lg bg-red-600 hover:bg-red-700 transition mb-8">
                Choose this plan
              </a>
              <p className="text-white/40 text-xs mb-4">What's Included:</p>
              <ul className="space-y-3">
                {["Unlimited Wallets", "20+ Supported Chains", "DEX Swap + Best Rate Alerts", "Advanced Portfolio + P&L", "Hardware Wallet Bridge", "Priority Support"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="material-symbols-rounded text-red-500" style={{ fontSize: '16px', fontVariationSettings: "'wght' 300" }}>check</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col p-6 bg-black rounded-lg border border-white/10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-rounded text-white/60" style={{ fontSize: '20px', fontVariationSettings: "'wght' 300" }}>workspace_premium</span>
                <h3 className="text-lg font-semibold text-white">Sovereign</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-white text-sm">/month</span>
              </div>
              <p className="text-white/40 text-sm mb-6">
                For institutions and power users who demand total control.
              </p>
              <a href="#" className="w-full text-center text-white font-medium text-sm py-2 rounded-lg border border-white/20 hover:bg-white/5 transition mb-8">
                Schedule a call
              </a>
              <p className="text-white/40 text-xs mb-4">What's Included:</p>
              <ul className="space-y-3">
                {["Everything in Pro", "All Chains + Early Access", "Zero Swap Fees", "Institutional Portfolio Grade", "Dedicated Security Advisor", "White-Glove Onboarding", "1-Year Storage Archive"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="material-symbols-rounded text-white/40" style={{ fontSize: '16px', fontVariationSettings: "'wght' 300" }}>check</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="text-white mb-4 w-fit border font-medium rounded-[4px] text-xs px-2 py-1 border-white/20">
              Testimonials
            </div>
            <h2 className="text-3xl text-center font-medium tracking-tighter text-white md:text-5xl mb-3">
              Trusted by real holders
            </h2>
            <p className="text-center max-w-xl text-white/50 text-sm">
              Don't take our word for it. Here's what our community says.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Card 1 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-950 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full h-24 bg-red-600/80 blur-3xl rounded-full pointer-events-none" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>star</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "After FTX collapsed, I moved everything to Nexus. I sleep better knowing I hold my own keys and no corporation can freeze my funds."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  JR
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">James R.</p>
                  <p className="text-white/40 text-xs">Crypto Trader · New York</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-950 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full h-24 bg-red-600/80 blur-3xl rounded-full pointer-events-none" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>star</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "The multi-chain support is unreal. I manage ETH, SOL, and BTC all in one clean interface. Nothing else I've tried even comes close."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  YT
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Yuki T.</p>
                  <p className="text-white/40 text-xs">DeFi Investor · Tokyo</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-950 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full h-24 bg-red-600/80 blur-3xl rounded-full pointer-events-none" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>star</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "The DEX aggregator consistently finds rates I can't find anywhere else. Saved me hundreds in fees just last month alone."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  RV
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Rina V.</p>
                  <p className="text-white/40 text-xs">DeFi Developer · Berlin</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-950 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full h-24 bg-red-600/80 blur-3xl rounded-full pointer-events-none" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded text-white" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>star</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Privacy-first was the deciding factor for me. No KYC, no cloud, no one watching my portfolio. Nexus is the only wallet I trust."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  PM
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Dr. Priya M.</p>
                  <p className="text-white/40 text-xs">Privacy Advocate · San Francisco</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>


  );
}
