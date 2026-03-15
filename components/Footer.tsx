import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400"]
});

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full lg:h-[60vh] bg-white p-0 lg:p-5">
      <div className="bg-black shadow-sm rounded-3xl w-full h-full p-10">
        <div className="w-full flex flex-col gap-5 items-center md:flex-row lg:justify-between">
          <h4 className="uppercase text-6xl md:text-7xl text-white">walvayn</h4>
          <p className="uppercase text-white text-4xl hidden lg:block">ESTETIKA I KVALITET <br/> BEZ KOMPROMISA</p>
        </div>
        <div className="w-full h-px bg-gray-100/20 mt-10"></div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3 text-white mt-10 w-full lg:w-[40%]">
            <p className="font-bold text-xl">Pretplati se na newsletter</p>
            <div className="flex flex-wrap">
              <input className="p-2 sm:p-3 text-sm sm:text-base bg-white text-black focus-visible:ring-0 ring-0 rounded-md placeholder:font-semibold placeholder:text-black" placeholder="Email*"/>
              <Button type="button" className="w-12.5 h-12.5 rounded-full bg-white text-black cursor-pointer"><ChevronRight/></Button>
            </div>
            <p className={`${inter.className} text-gray-500 max-w-xl text-sm`}>Prijavom na newsletter pristaješ na naše uslove korišćenja i pravila privatnosti. Obećavamo da ne šaljemo spam, samo dropove i popuste.</p>
          </div>
          <div className="flex flex-col w-full gap-5 lg:flex-row lg:gap-20 p-3 lg:w-[60%]">
            <div className="p-3 border border-gray-400/20 border-t-gray-400/20 border-l-transparent lg:border-l-gray-400/20 lg:border-t-transparent border-r-transparent border-b-transparent mt-10 flex flex-col">
              <ul className="flex flex-col text-white">
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        home
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        home
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        trgovina
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        trgovina
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        best sellers
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        best sellers
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        kontakt
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        kontakt
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-3 border border-t-gray-400/20 border-l-transparent lg:border-l-gray-400/20 lg:border-t-transparent border-r-transparent border-b-transparent mt-10 flex flex-col">
              <ul className="flex flex-col text-white">
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        instagram
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        instagram
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        tiktok
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        tiktok
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        discord
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        discord
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='group relative py-2 overflow-hidden cursor-pointer'>
                    <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                      <span className='transition-all duration-300 cubic-bounce group-hover:-translate-y-[120%]'>
                        email
                      </span>
                      <span className='absolute top-0 left-0 transition-all duration-300 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                        email
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-100/20 mt-10 mb-7"></div>
        <div className="w-full text-center">
          <p className={`${inter.className} text-gray-100/20 text-sm`}>Copyright © {year} Walvayn | Sva prava zadržana</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;