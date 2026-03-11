import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return [{ locale: "hr" }, { locale: "en" }];
}

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
    </div>
  );
}
