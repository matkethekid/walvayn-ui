"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "600", "800"]
});

interface itemInCollection {
  id: number;
  name: string;
  price: number;
  onSale: boolean;
  salePrice: number;
  salePercent: number;
  preferredUrl: string;
  thumbnailImage: string;
  sex: string;
  collection: "zima" | "ljeto";
};

const itemsInCollection: itemInCollection[] = [
  {
    id: 0,
    name: "Sportswear Tech Fleece",
    price: 120,
    onSale: true,
    salePrice: 84,
    salePercent: 30,
    preferredUrl: "tech-fleece-nike-syna-world",
    thumbnailImage: "/products/techfleece3.avif",
    sex: "f",
    collection: "zima"
  },
  {
    id: 1,
    name: "Tech Fleece Gray-Blue",
    price: 120,
    onSale: true,
    salePrice: 100,
    salePercent: 20,
    preferredUrl: "tech-fleece-gray-blue",
    thumbnailImage: "/products/techfleece2.avif",
    sex: "m",
    collection: "ljeto"
  },
  {
    id: 2,
    name: "Tech Fleece Olive",
    price: 120,
    onSale: true,
    salePrice: 110,
    salePercent: 10,
    preferredUrl: "tech-fleece-olive",
    thumbnailImage: "/products/techfleece4.avif",
    sex: "m",
    collection: "zima"
  },
  {
    id: 3,
    name: "Tech Fleece Oliveeee",
    price: 120,
    onSale: true,
    salePrice: 100,
    salePercent: 20,
    preferredUrl: "tech-fleece-olive",
    thumbnailImage: "/products/techfleece4.avif",
    sex: "m",
    collection: "zima"
  },
  {
    id: 4,
    name: "Tech Fleece Oliveaa",
    price: 100,
    onSale: true,
    salePrice: 50,
    salePercent: 50,
    preferredUrl: "tech-fleece-olive",
    thumbnailImage: "/products/techfleece4.avif",
    sex: "m",
    collection: "zima"
  }
];

const SaleComponent = () => {
    const [collection, setCollection] = useState<"sve" | "zima" | "ljeto">("sve");
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    
    const filteredItems = collection === "sve" 
        ? itemsInCollection
        : itemsInCollection.filter(item => item.collection === collection);

    const calculateDiscount = (price: number, percent: number) => {
        if (percent <= 0) return price;
        const discount = (price * percent) / 100;
        return Math.round(price - discount);
    };
  return (
    <section className='w-full min-h-screen bg-white gap-3 pt-10 pb-10 pl-3 pr-3 lg:p-10 flex flex-col'>
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between">
        <h2 className="uppercase text-4xl lg:text-5xl leading-normal">proizvodi<br/>na popustu</h2>
        <div className="flex flex-col gap-5 justify-start">
          <p className={`${inter.className} max-w-lg text-[#656565]`}>Istražite proizvode koji su osvojili naše kupce. Pažljivo odabrani favoriti koje vrijedi imati.</p>
          <div className="flex flex-row group items-center w-full relative">
            <Link href={"/trgovina"} className='relative overflow-hidden uppercase w-64 lg:w-80 h-16 lg:h-24 flex items-center justify-center bg-black border border-gray-100/10 text-white rounded-full text-2xl lg:text-3xl font-bold'>
              <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                iskoristi
              </span>
              <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0 whitespace-nowrap px-4'>
                priliku
              </span>
            </Link>
            <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-black border border-gray-100/10 text-white h-16 lg:h-24 w-16 lg:w-24 flex items-center justify-center shrink-0'>
              <ArrowRight className='scale-100 lg:scale-125 transition-all duration-300 cubic-bounce group-hover:scale-150 group-hover:-rotate-45' />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex flex-wrap gap-5">
        <Button aria-label="Izaberi sve kolekcije" onClick={() => setCollection("sve")} className={`uppercase p-5 transition-all duration-400 ${collection === "sve" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>sve kolekcije</Button>
        <Button aria-label="Izaberi zimsku kolekciju" onClick={() => setCollection("zima")} className={`uppercase p-5 transition-all duration-400 ${collection === "zima" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>zima</Button>
        <Button aria-label="Izaberi ljetnju kolekciju" onClick={() => setCollection("ljeto")} className={`uppercase p-5 transition-all duration-400 ${collection === "ljeto" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>ljeto</Button>
      </div>
      <div className="p-5 md:p-10 bg-white">
        <Swiper key={collection} modules={[Navigation]} slidesPerView={1} spaceBetween={50} allowTouchMove={false} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} onSwiper={(swiper) => setSwiperInstance(swiper)}>
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col group cursor-pointer group relative">
                  <Link href={"/trgovina"}>
                      <div className="relative aspect-4/5 w-full bg-[#f6f6f6] overflow-hidden">
                          <div className="absolute top-0 right-0 pt-3 pb-3 pl-5 pr-5 text-white bg-black z-50">
                            <span className="uppercase text-sm">akcija</span>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <Image src={"/eye.svg"} alt="eye" width={65} height={65} className="opacity-[0.8]"/>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.4] z-9 transition-opacity duration-500 pointer-events-none"></div>
                            <Image src="/noise.svg" alt="noise" fill className="opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 pointer-events-none absolute inset-0 z-10 object-cover"/>
                            <Image src={item.thumbnailImage} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={index < 4}/>
                          </div>
                          <div className="mt-3 flex flex-col gap-1">
                          <h3 className="text-black font-medium text-base leading-tight">
                            {item.name}
                          </h3>
                          <h4 className="text-black font-medium text-base leading-tight">
                            <span className={`${inter.className} font-semibold text-[#707072]`}>{item.sex === "m" ? "Muški" : "Ženski"}</span>
                          </h4>
                          <div className={`mt-2 font-medium text-base ${inter.className} font-bold`}>
                            {item.onSale ? (
                              <div className="flex gap-2">
                                <span className={`font-bold ${inter.className}`}>{calculateDiscount(item.price, item.salePercent)}€</span>
                                <span className={`text-[#707072] line-through font-bold ${inter.className}`}>{item.price}€</span>
                                <span className={`text-[#007b55] ${inter.className} font-bold`}>{item.salePercent}% popust</span>
                              </div>
                              ) : (
                              <span className={`font-bold ${inter.className}`}>{item.price}€</span>
                            )}
                          </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 w-full flex flex-row lg:gap-5 justify-between lg:justify-end">
            <Button aria-label="Prethodni slajd" onClick={() => swiperInstance?.slidePrev()} className="rounded-full w-12 h-12 lg:w-14.5 lg:h-14.5 cursor-pointer bg-black text-center"><ChevronLeft /></Button>
            <Button aria-label="Naredni slajd" onClick={() => swiperInstance?.slideNext()} className="rounded-full w-12 h-12 lg:w-14.5 lg:h-14.5 cursor-pointer bg-black text-center"><ChevronRight /></Button>
        </div>
      </div>
    </section>
  )
}

export default SaleComponent