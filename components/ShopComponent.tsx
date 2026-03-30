"use client";

import { useState } from 'react';
import { Inter } from 'next/font/google';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { SearchIcon } from 'lucide-react';
import Product from './Product';

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

interface Props {
    itemsInCollection: itemInCollection[];
};

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "600", "800"]
});

const ShopComponent = ({ itemsInCollection }: Props) => {
    const [search, setSearch] = useState<string>("");
    const filteredItems = search === "" ? itemsInCollection : itemsInCollection.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
        <div className='w-full h-full flex flex-col lg:justify-end lg:items-end'>
            <div className='p-5 w-full lg:w-1/5 '>
                <InputGroup className={`rounded-full ${inter.className}`}>
                    <InputGroupInput placeholder="Pretraži..." onChange={(e) => setSearch(e.target.value)}/>
                    <InputGroupAddon>
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className={`w-full p-3 h-full ${filteredItems.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid"} gap-3`}>
                {filteredItems.length > 0 ?
                    filteredItems.map((item: itemInCollection, index: number) => (
                        <Product index={index} item={item} key={index}/>
                    )) : <div className='w-full h-screen text-center flex items-center justify-center text-xl'>
                        <p>Nema rezultata.</p>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default ShopComponent;