import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Walvayn Shop | Proizvod",
    description: "Kontakt brteu"
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
