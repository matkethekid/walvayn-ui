import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import FilterComponent from '@/components/FilterComponent';
import { Suspense } from 'react';
import ShopComponent from '@/components/ShopComponent';
import { cacheLife, cacheTag } from 'next/cache';

const gudlakBold = localFont({
  src: "../fonts/GudlakBold.woff2",
  display: 'swap'
});

interface itemsInCollection {
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

// const itemsInCollection: itemInCollection[] = [
//   {
//     id: 0,
//     name: "Sportswear Tech Fleece",
//     price: 120,
//     onSale: false,
//     salePrice: 0,
//     salePercent: 0,
//     preferredUrl: "tech-fleece-nike-syna-world",
//     thumbnailImage: "/products/techfleece3.avif",
//     sex: "f",
//     collection: "zima"
//   },
//   {
//     id: 1,
//     name: "Tech Fleece Gray-Blue",
//     price: 120,
//     onSale: true,
//     salePrice: 100,
//     salePercent: 20,
//     preferredUrl: "tech-fleece-gray-blue",
//     thumbnailImage: "/products/techfleece2.avif",
//     sex: "m",
//     collection: "ljeto"
//   },
//   {
//     id: 2,
//     name: "Tech Fleece Olive",
//     price: 120,
//     onSale: false,
//     salePrice: 0,
//     salePercent: 0,
//     preferredUrl: "tech-fleece-olive",
//     thumbnailImage: "/products/techfleece4.avif",
//     sex: "m",
//     collection: "zima"
//   },
//   {
//     id: 3,
//     name: "Tech Fleece Oliveeee",
//     price: 120,
//     onSale: false,
//     salePrice: 0,
//     salePercent: 0,
//     preferredUrl: "tech-fleece-olive",
//     thumbnailImage: "/products/techfleece4.avif",
//     sex: "m",
//     collection: "zima"
//   },
//   {
//     id: 4,
//     name: "Tech Fleece Oliveaa",
//     price: 120,
//     onSale: false,
//     salePrice: 0,
//     salePercent: 0,
//     preferredUrl: "tech-fleece-olive",
//     thumbnailImage: "/products/techfleece4.avif",
//     sex: "m",
//     collection: "zima"
//   }
// ];

const page = async () => {
  async function getData() {
    "use cache";
    cacheLife("minutes");
    cacheTag("products");
    const response = await fetch(`${process.env.BACKEND_URL}/products/all`);
    const data = await response.json();
    return data.items;
  }
  const items: itemsInCollection[] = await getData();
  return (
    <section className='min-h-screen w-full'>
      <Navbar/>
      <div className='w-full min-h-screen flex-1 flex flex-col lg:flex-row'>
        <aside className="lg:w-[20%] lg:sticky lg:top-20 p-5 lg:h-[calc(100vh-5rem)] overflow-y-hidden">
          <h1 className={`${gudlakBold.className} text-2xl text-black mb-3 lg:mb-10`}>Proizvodi (1570)</h1>
          <Suspense fallback={<div>Učitavanje filtera...</div>}>
            <FilterComponent />
          </Suspense>
        </aside>
        <div className='w-full h-full'>
          <ShopComponent itemsInCollection={items}/>
        </div>
      </div>
    </section>
  )
}

export default page;