"use client";

import dynamic from "next/dynamic";

const Sale = dynamic(() => import("./SaleComponent"), { ssr: false });

export default function ClientOnlySale() {
  return <Sale />;
}
