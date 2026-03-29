"use client";

import SaleComponent from "./SaleComponent";

export default function ClientOnlySale() {
  const items: any = [];
  return <SaleComponent itemsInCollection={items} />;
}
