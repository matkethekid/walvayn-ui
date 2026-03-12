"use client";

import { useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "600"]
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
    onSale: false,
    salePrice: 0,
    salePercent: 0,
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
    onSale: false,
    salePrice: 0,
    salePercent: 0,
    preferredUrl: "tech-fleece-olive",
    thumbnailImage: "/products/techfleece4.avif",
    sex: "m",
    collection: "zima"
  }
];

const BestSellersComponent = () => {
  const [collection, setCollection] = useState<"sve" | "zima" | "ljeto">("sve");

  const filteredItems = collection === "sve" 
    ? itemsInCollection 
    : itemsInCollection.filter(item => item.collection === collection);
  return (
    <section className='w-full min-h-screen bg-white gap-3 pt-10 pb-10 pl-3 pr-3 lg:p-10 flex flex-col'>
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between">
        <h2 className="uppercase text-4xl lg:text-5xl leading-normal">najprodavaniji<br/>proizvodi</h2>
        <div className="flex flex-col gap-5 justify-start">
          <p className={`${inter.className} max-w-lg text-[#656565]`}>Istražite proizvode koji su osvojili naše kupce. Pažljivo odabrani favoriti koje vrijedi imati.</p>
          <div className="flex flex-row group items-center w-full relative">
            <Link href={"/trgovina"} className='relative overflow-hidden uppercase w-64 lg:w-80 h-16 lg:h-24 flex items-center justify-center bg-black border border-gray-100/10 text-white rounded-full text-2xl lg:text-3xl font-bold'>
              <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                pogledaj
              </span>
              <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0 whitespace-nowrap px-4'>
                ponudu
              </span>
            </Link>
            <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-black border border-gray-100/10 text-white h-16 lg:h-24 w-16 lg:w-24 flex items-center justify-center shrink-0'>
              <ArrowRight className='scale-100 lg:scale-125 transition-all duration-300 cubic-bounce group-hover:scale-150 group-hover:-rotate-45' />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex flex-wrap gap-5">
        <Button onClick={() => setCollection("sve")} className={`uppercase p-5 transition-all duration-400 ${collection === "sve" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>sve kolekcije</Button>
        <Button onClick={() => setCollection("zima")} className={`uppercase p-5 transition-all duration-400 ${collection === "zima" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>zima</Button>
        <Button onClick={() => setCollection("ljeto")} className={`uppercase p-5 transition-all duration-400 ${collection === "ljeto" ? "bg-black text-white" : "bg-gray-100 border border-gray-300 text-black"} rounded-full items-center justify-center cursor-pointer`}>ljeto</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10 bg-white">
        {filteredItems.map((item, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className="relative aspect-4/5 w-full bg-[#f6f6f6] overflow-hidden">
              <Image src={item.thumbnailImage} alt={item.name} fill className="object-cover"/>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <h3 className="text-black font-medium text-base leading-tight">
                {item.name}
              </h3>
              <h4 className="text-black font-medium text-base leading-tight">
                <span className={`${inter.className} font-bold text-[#707072]`}>{item.sex === "m" ? "Muški" : "Ženski"}</span>
              </h4>
              <div className="mt-2 font-medium text-base">
                {item.onSale ? (
                  <div className="flex gap-2">
                    <span>{item.salePrice}€</span>
                    <span className="text-[#707072] line-through font-normal">{item.price}€</span>
                    <span className="text-[#007b55]">{item.salePercent}% popust</span>
                  </div>
                ) : (
                  <span>{item.price}€</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellersComponent;