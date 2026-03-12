"use client";

import { useState } from "react";
import localFont from "next/font/local";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { HR, US } from "country-flag-icons/react/3x2";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const gudlakExtraBold = localFont({
  src: "../app/fonts/GudlakExtraBold.woff2",
});

const Navbar = () => {
  const links = [
    { id: 0, name: "home", href: "/" },
    { id: 1, name: "trgovina", href: "/trgovina" },
    { id: 2, name: "best seller", href: "/best-seller" },
    { id: 3, name: "kontakt", href: "/kontakt" },
  ];
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);
  return (
    <nav className="w-full pt-5 pb-5 pl-10 pr-10 bg-white flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-row justify-between items-center w-full lg:w-auto">
        <h1 className={`${isSidebarOpened ? "text-white" : "text-black"} uppercase ${gudlakExtraBold.className} text-[2.188rem] z-101 flex`}>walvayn</h1>
        <Button className={isSidebarOpened ? "hidden" : "flex lg:hidden p-5 rounded-xl z-101"} onClick={() => setIsSidebarOpened(true)}><Menu className="size-5"/></Button>
        <Button className={!isSidebarOpened ? "hidden" : "flex lg:hidden p-5 rounded-xl z-101 bg-white"} onClick={() => setIsSidebarOpened(false)}><X className="size-5 text-black"/></Button>
      </div>
      <ul className="hidden lg:flex flex-row gap-10">
        {
          links.map((link, index) => (
            <li key={index}><Link href={link.href} className={`uppercase navbar-link ${gudlakExtraBold.className} text-[1.25rem]`}>{link.name}</Link></li>
          ))
        }
      </ul>
      <div className={`${gudlakExtraBold.className} hidden lg:block`}>
        <Select value="hrv">
          <SelectTrigger className="w-full max-w-48 ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none border-0">
            <SelectValue placeholder="Izaberi jezik" />
          </SelectTrigger>
          <SelectContent className={`${gudlakExtraBold.className}`}>
            <SelectItem value="hrv" className="flex justify-center items-center"><HR title="Hrvatska" style={{ width: 30 }} /> HRV</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-center">
        <div className="relative">
          <ShoppingBag size={37}/>
          <div className={`bg-black rounded-full w-5 h-5 absolute top-0 right-0 text-white text-[0.7rem] text-center flex justify-center items-center`}><span>12</span></div>
        </div>
      </div>
      <div className={isSidebarOpened ? "fixed top-0 left-0 flex flex-col bg-black w-screen h-screen z-100 text-white" : "hidden"}>
        <ul className="flex lg:hidden flex-col items-center w-full h-full justify-center gap-10 text-white">
          {
            links.map((link, index) => (
              <li key={index}><Link href={link.href} className={`uppercase navbar-link ${gudlakExtraBold.className} text-[1.25rem] text-white`}>{link.name}</Link></li>
            ))
          }
        </ul>
        <div className={`${gudlakExtraBold.className} flex lg:hidden justify-center mb-10`}>
          <Select value={"hrv"}>
            <SelectTrigger className="w-full max-w-48 bg-white text-black border border-gray-200 ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none">
              <SelectValue placeholder="Izaberi jezik" />
            </SelectTrigger>
            <SelectContent className={`${gudlakExtraBold.className} bg-white text-black z-110`}>
              <SelectItem value="hrv" className="cursor-pointer focus:bg-gray-100 focus:text-black text-black">
                <div className="flex items-center gap-2">
                  <HR title="Hrvatska" style={{ width: 30 }} /> 
                  <span>HRV</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;