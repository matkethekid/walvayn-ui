"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

interface Item {
    id: number;
    name: string;
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: number;
    sizes: string[];
    images: string[];
};

interface Props {
    item: Item;
};

const IndividualItem = ({ item }: Props) => {
    const [selectedImage, setSelectedImage] = useState();
  return (
    <section className='w-full min-h-screen'>
        <Navbar/>
        <div className="w-full lg:max-w-5xl">
            <div className="flex lg:flex-col gap-3 overflow-y-auto h-auto pr-2 sm:justify-center sm:items-center">
                {item.images.map((img: any, idx) => (
                    <div key={idx} onMouseEnter={() => setSelectedImage(img)} className={`relative w-20 h-20 shrink-0 cursor-pointer rounded-lg border-2 transition-all ${selectedImage === img ? "border-yellow-500 shadow-md" : "border-gray-200"}`}>
                        <Image src={img} alt="image" fill className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default IndividualItem;