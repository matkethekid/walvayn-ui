import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Walvayn Shop | Kontakt",
    description: "Kontakt brteu"
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
