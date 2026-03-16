import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import FilterComponent from '@/components/FilterComponent';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const gudlakBold = localFont({
  src: "../fonts/GudlakBold.woff2",
  display: 'swap'
});

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
  },
  {
    id: 3,
    name: "Tech Fleece Oliveeee",
    price: 120,
    onSale: false,
    salePrice: 0,
    salePercent: 0,
    preferredUrl: "tech-fleece-olive",
    thumbnailImage: "/products/techfleece4.avif",
    sex: "m",
    collection: "zima"
  },
  {
    id: 4,
    name: "Tech Fleece Oliveaa",
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

const page = () => {
  const calculateDiscount = (price: number, percent: number) => {
    if (percent <= 0) return price;
    const discount = (price * percent) / 100;
    return Math.round(price - discount);
  };
  return (
    <section className='min-h-screen w-full'>
      <Navbar/>
      <div className='w-full min-h-screen flex-1 flex flex-col lg:flex-row'>
        <aside className="lg:w-[20%] lg:sticky lg:top-20 p-5 lg:h-[calc(100vh-5rem)] overflow-y-auto">
          <h1 className={`${gudlakBold.className} text-2xl text-black mb-10`}>Proizvodi (1570)</h1>
          <FilterComponent />
        </aside>
        <div className='e-full lg:w-[80%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {itemsInCollection.map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer group relative">
                <Link href={"/trgovina"}>
                  <div className="relative aspect-4/5 w-full bg-[#f6f6f6] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <Image src={"/eye.svg"} alt="eye" width={65} height={65} className="opacity-[0.8]"/>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.4] z-9 transition-opacity duration-500 pointer-events-none"></div>
                      <Image src="/noise.svg" alt="noise" fill className="opacity-0 group-hover:opacity-[0.5] transition-opacity duration-500 pointer-events-none absolute inset-0 z-10 object-cover"/>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default page;