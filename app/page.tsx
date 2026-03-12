import Navbar from "@/components/Navbar";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex h-full w-full relative overflow-hidden">
        <div className="absolute inset-0 -z-10"> 
          <video autoPlay muted loop className="fixed top-0 left-0 min-w-full min-h-full object-cover">
            <source src="/3555722-hd_1920_1080_18fps.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black opacity-[0.4] z-2"></div>
        <div className="absolute inset-0 z-1 opacity-[0.3] overflow-hidden">
          <Image src="/noise.svg" alt="noise" fill className="object-cover mix-blend-overlay noise"/>
        </div>
        <div className="w-full h-full items-end justify-end lg:justify-center flex flex-col lg:flex-row lg:gap-25">
          <div className="w-full lg:w-[60%] flex flex-col z-3 bottom-0 left-0 gap-5 pl-3 pr-3 sm:pl-10 sm:pr-10">
            <h5 className="uppercase text-white leading-none">// based in zg</h5>
            <h1 className="uppercase leading-none text-white text-[clamp(3.5rem,15vw,12.5rem)]">
              prioriteti
            </h1>
          </div>
          <div className='flex flex-row items-center justify-start lg:justify-center w-full lg:w-[40%] z-3 group pt-10 pb-10'>
            <div className="w-full sm:w-[80%] md:w-[50%] pl-3 pr-3 sm:pl-10 sm:pr-10 lg:pl-0 lg:pr-0 lg:w-full flex flex-row">
              <Link href={"/trgovina"} className='relative overflow-hidden uppercase w-[90%] lg:w-1/2 h-15 lg:h-25 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-gray-100/10 text-white rounded-full text-3xl font-bold'>
                <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                  kreni
                </span>
                <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
                  u kupovinu
                </span>
              </Link>
              <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-white/10 backdrop-blur-md border border-gray-100/10 text-white h-15 lg:h-25 w-15 lg:w-25 flex items-center justify-center shrink-0'>
                <ShoppingBag className='scale-100 lg:scale-140 transition-all duration-300 cubic-bounce group-hover:scale-150' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
