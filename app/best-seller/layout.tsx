import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Walvayn Shop | Best-Seller",
    description: "Best-Seller brteu"
};

export default function BestSellerLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
