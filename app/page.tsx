import BestSellersComponent from "@/components/BestSellersComponent";
import Navbar from "@/components/Navbar";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import ClientOnlySale from "@/components/ClientOnlySaleComponent";
import "swiper/css";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0 -z-10"> 
          <video autoPlay muted loop playsInline poster="/videoposter.webp" className="fixed top-0 left-0 min-w-full min-h-full object-cover">
            <source src="/herovideo2.webm" type="video/webm"/>
            <source src="/herovideo2.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black opacity-[0.4] z-2"></div>
        <div className="absolute inset-0 z-1 opacity-[0.3] overflow-hidden">
          <Image src="/noise.svg" alt="noise" fill className="object-cover mix-blend-overlay noise"/>
        </div>
        <div className="w-full h-full items-end justify-end 2xl:justify-center z-30 gap-5 2xl:gap-0 flex flex-col 2xl:flex-row ">
          <div className="w-full flex flex-col z-3 bottom-0 left-0 gap-5 pl-3 pr-3 sm:pl-10 sm:pr-10">
            <p className="uppercase text-white leading-none">// based in zg</p>
            <h1 className="uppercase leading-none text-white text-[clamp(3.5rem,12vw,12.5rem)]">
              prioriteti
            </h1>
          </div>
          <div className='flex flex-row w-full z-10 pb-10 2xl:justify-end'>
            <div className="flex flex-row items-center group px-3 sm:px-10">
              <Link href={"/trgovina"} className='relative overflow-hidden uppercase w-64 lg:w-80 h-16 lg:h-24 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-gray-100/10 text-white rounded-full text-2xl lg:text-3xl font-bold'>
                <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                  kreni
                </span>
                <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0 whitespace-nowrap px-4'>
                  u kupovinu
                </span>
              </Link>
              <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-white/10 backdrop-blur-md border border-gray-100/10 text-white h-16 lg:h-24 w-16 lg:w-24 flex items-center justify-center shrink-0'>
                <ShoppingBag className='scale-100 lg:scale-125 transition-all duration-300 cubic-bounce group-hover:scale-150' />
              </div>
            </div>
          </div>
        </div>
      </main>
      <BestSellersComponent/>
      <ClientOnlySale/>
      <Footer/>
    </div>
  );
}
