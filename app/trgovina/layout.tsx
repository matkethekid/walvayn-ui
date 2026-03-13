import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Walvayn Shop | Trgovina",
    description: "Trgovina brteu"
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
