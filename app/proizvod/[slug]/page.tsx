import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndividualItem from "@/components/IndividualItem";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <section className="min-h-screen w-full">
      <Navbar />
      <Suspense>
        <DroneDataLoader params={params} />
      </Suspense>
      <Footer />
    </section>
  );
};

async function DroneDataLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CachedDroneFetch slug={slug} />;
}

async function CachedDroneFetch({ slug }: { slug: string }) {
  const response = await fetch(`${process.env.BACKEND_URL}/products/${slug}`);
  if (!response.ok) return <div className="p-20 text-center">Drone not found</div>;
  const data = await response.json();
  
  return <IndividualItem item={data} />;
}

export default page;