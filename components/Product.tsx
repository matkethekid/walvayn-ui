import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

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

const inter = Inter({
    subsets: ["latin-ext"],
    weight: ["400", "600"]
});

const Product = ({ index, item }: { index: number, item: itemInCollection }) => {
    const calculateDiscount = (price: number, percent: number) => {
        if (percent <= 0) return price;
        const discount = (price * percent) / 100;
        return Math.round(price - discount);
    };
  return (
    <div key={index} className="w-full flex flex-col group cursor-pointer group relative mb-3">
        <Link href={`/proizvod/${item.preferredUrl}`}>
            <div className="relative aspect-4/5 w-full bg-[#f6f6f6] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <Image src={"/eye.svg"} alt="eye" width={65} height={65} className="opacity-[0.8]"/>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.4] z-9 transition-opacity duration-500 pointer-events-none"></div>
                    <Image src="/noise.svg" alt="noise" fill className="opacity-0 group-hover:opacity-[0.5] transition-opacity duration-500 pointer-events-none absolute inset-0 z-10 object-cover"/>
                    <Image src={item.thumbnailImage} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={index < 4}/>
                </div>
                <div className="mt-3 flex flex-col gap-1">
                    <h3 className="text-black font-medium text-base leading-tight">{item.name}</h3>
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
  )
}

export default Product;