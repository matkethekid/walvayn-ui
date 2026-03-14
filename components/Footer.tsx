import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400"]
});

const Footer = () => {
  return (
    <footer className="w-full h-[60vh] bg-white p-5">
      <div className="bg-black shadow-sm rounded-3xl w-full h-full p-10">
        <div className="w-full flex flex-col gap-5 items-center lg:flex-row lg:justify-between">
          <h4 className="uppercase text-7xl text-white">walvayn</h4>
          <p className="uppercase text-white text-4xl">ESTETIKA I KVALITET <br/> BEZ KOMPROMISA</p>
        </div>
        <div className="w-full h-px bg-gray-100/20 mt-10"></div>
        <div className="flex flex-col gap-3 text-white mt-10">
          <p className="font-bold text-xl">Pretplati se na newsletter</p>
          <div className="flex flex-row">
            <input className="p-3 bg-white text-black focus-visible:ring-0 ring-0 rounded-md placeholder:font-semibold placeholder:text-black" placeholder="Email*"/>
            <Button type="button" className="w-12.5 h-12.5 rounded-full bg-white text-black cursor-pointer"><ChevronRight/></Button>
          </div>
          <p className={`${inter.className} text-gray-500 max-w-xl text-sm`}>Prijavom na newsletter pristaješ na naše uslove korišćenja i pravila privatnosti. Obećavamo da ne šaljemo spam, samo dropove i popuste.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;