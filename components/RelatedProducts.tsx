import { Inter } from "next/font/google";
import Product from "./Product";

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
    products: itemInCollection[];
};

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "600", "800"]
});

// const productsaa = [
//     {
//         id: 1,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
//     {
//         id: 2,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
//     {
//         id: 3,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
//     {
//         id: 4,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
//     {
//         id: 5,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
//     {
//         id: 6,
//         name: 'Tech Fleece Olive',
//         price: 50,
//         onSale: false,
//         salePercent: 0,
//         sex: 'male',
//         description: 'asdasdasdasdasdad',
//         thumbnailImage: 'http://31.97.183.47:9000/walvayn-bucket/fa69c5ef-fef4-46bd-ac50-0edb7362dbcf.webp',
//         images: '["http://31.97.183.47:9000/walvayn-bucket/c8a8d4a5-367c-4389-8911-9f150e15e5be.webp","http://31.97.183.47:9000/walvayn-bucket/c277a1b3-7fa3-4a90-92bc-9b208df3233b.webp"]',
//         sizes: [ 'M' ],
//         collection: 'zimska',
//         preferredUrl: 'tech-fleece-olive'
//     },
// ];

const RelatedProducts = ({ products }: Props) => {
  return (
    <section className={`${products.length > 0 ? 'w-full min-h-[60vh]' : "hidden"} ${inter.className} p-7`}>
        <h3 className="font-bold text-4xl">Možda Vam Se Svidi</h3>
        <div className="w-full h-full lg:p-10">
            <div className="flex gap-4 overflow-x-auto p-3 snap-x snap-mandatory scroll-smooth">
                {products.map((product: itemInCollection, index: number) => (
                    <div key={index} className="min-w-full sm:min-w-[50%] lg:min-w-[calc(33.333%-1rem)] snap-start">
                        <Product item={product} index={index} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts;