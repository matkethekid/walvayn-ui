/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ShoppingBag } from "lucide-react";

interface Item {
    id: number;
    name: string;
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: number;
    preferredUrl: string;
    thumbnailImage: string;
    sex: string;
    collection: string;
    sizes: string[];
    images: string[];
    freeShipping: boolean;
    description: string;
};

interface Props {
    item: Item;
};

// const item: Item = {
//     id: 4,
//     name: "Tech Fleece Oliveaa",
//     price: 120,
//     onSale: true,
//     salePrice: 0,
//     salePercent: 70,
//     preferredUrl: "tech-fleece-olive",
//     thumbnailImage: "/products/techfleece4.avif",
//     sex: "m",
//     collection: "zima",
//     sizes: ["XS", "S", "M", "L"],
//     images: ["/products/techfleece4.avif", "/products/techfleece2.avif", "/products/techfleece3.avif", "/products/techfleece3.avif"],
//     freeShipping: true,
//     description: "Legendarni Nike Windrunner stil dobija dozu vrhunske udobnosti uz naš flis koji je gladak sa obe strane. Uparen je sa opuštenim krojem i tehničkim detaljima, poput prepoznatljivog Tech džepa na rukavu ojačanog trakom, kao i rastegljivih ivica na donjem delu i manžetnama."
// };

const inter = Inter({
    subsets: ["latin-ext"],
    weight: ["400", "600"]
});

const IndividualItem = ({ item }: Props) => {
    const images = Array.isArray(item.images) ? item.images : JSON.parse(item.images || '[]');
    const [selectedImage, setSelectedImage] = useState(images[0] || '');
    const [selectedSize, setSelectedSize] = useState<string>("");

    const calculateDiscount = (price: number, percent: number) => {
        if (percent <= 0) return price;
        const discount = (price * percent) / 100;
        return Math.round(price - discount);
    };
  return (
    <section className="w-full min-h-screen bg-gray-50/50">
      <div className="max-w-325 mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">          
            <div className="order-2 lg:order-1 lg:col-span-1 flex lg:flex-col gap-3 overflow-x-hidden lg:overflow-y-auto mx-auto lg:pb-0 scrollbar-hide">
                {images.map((img: any, idx: number) => (
                    <button key={idx} onClick={() => setSelectedImage(img)} onMouseEnter={() => setSelectedImage(img)} className={`relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${selectedImage === img ? "border-black scale-95" : "border-transparent hover:border-gray-300"}`}>
                        <Image src={img} alt={`Preview ${idx}`} fill className="object-cover" />
                    </button>
                ))}
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
                <div className="relative aspect-4/5 w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <Image src={selectedImage} alt={item.name} fill priority className="object-cover transition-opacity duration-300"/>
                </div>
            </div>
            <div className="order-3 lg:col-span-5 flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">{item.name}</h1>
                    <p className={`${inter.className} text-base mt-2 text-gray-700 font-bold`}>{item.sex === "m" ? "Muški" : "Ženski"}</p>
                    <div className={`mt-2 font-medium text-lg ${inter.className} font-bold`}>
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
                <div className="h-px bg-gray-200 w-full" />
                <p className={`${inter.className} text-gray-600 leading-relaxed font-bold text-lg`}>Izaberi veličinu</p>
                <div className="w-full flex flex-wrap gap-3">
                    {
                        item.sizes.map((size, index) => (
                            <button key={index} aria-label="Izaberi veličinu" onClick={() => setSelectedSize(size)} className={selectedSize === size ? "pt-3 pb-3 pl-10 pr-10 rounded cursor-pointer bg-black text-white" : "pt-3 pb-3 pl-10 pr-10 rounded cursor-pointer border border-gray-400 hover:bg-black hover:text-white"}>{size}</button>
                        ))
                    }
                </div>
                <div className="flex flex-row group items-center justify-center lg:justify-start w-full relative">
                    <button aria-label="Dodaj u torbu" className='relative overflow-hidden cursor-pointer uppercase w-64 lg:w-70 h-16 lg:h-17 flex items-center justify-center bg-black border border-gray-100/10 text-white rounded-full text-lg lg:text-xl font-bold'>
                    <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                        dodaj
                    </span>
                    <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0 whitespace-nowrap px-4'>
                        u torbu
                    </span>
                    </button>
                    <div className='relative overflow-hidden p-3 lg:p-3 rounded-full bg-black border border-gray-100/10 text-white h-16 lg:h-17 w-16 lg:w-17 flex items-center justify-center shrink-0'>
                        <ShoppingBag className='scale-100 lg:scale-80 transition-all duration-300 cubic-bounce group-hover:scale-95' />
                    </div>
                </div>
                <div className="h-px bg-gray-200 w-full" />
                <div>
                    <p className={`${inter.className} font-bold text-lg`}>Dostava</p>
                    <p className={`${inter.className} font-normal text-base`}>{item.freeShipping ? "Besplatna" : "Troškove dostave snosi kupac"}</p>
                </div>
                <p className={`${inter.className} text-gray-800 font-bold`}>{item.description}</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default IndividualItem;