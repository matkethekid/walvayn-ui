"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "700"]
});

const filters = [
  {
    id: "gender",
    title: "Pol",
    options: [
      { label: "Muški", value: "muski" },
      { label: "Ženski", value: "zenski" }
    ]
  },
  {
    id: "sale",
    title: "Akcija",
    options: [
      { label: "Na akciji", value: "true" }
    ]
  },
  {
    id: "collection",
    title: "Kolekcija",
    options: [
      { label: "Ljetnja", value: "ljetnja" },
      { label: "Zimska", value: "zimska" }
    ]
  }
];

const FilterComponent = () => {
  const [openSection, setOpenSection] = useState<string | null>("pol");
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const toggleFilter = (filter: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const values = params.getAll(filter);

    if (values.includes(value)) {
      const newValues = values.filter(v => v !== value);

      params.delete(filter);
      newValues.forEach(v => params.append(filter, v));
    } else {
      params.append(filter, value);
    }

    router.push(`?${params.toString()}`);
  };

  const isChecked = (filter: string, value: string) => {
    return searchParams.getAll(filter).includes(value);
  };
  return (
    <>
      <Button onClick={() => setIsHidden(prevState => !prevState)} className='flex lg:mb-10 justify-center items-center lg:hidden p-4 text-base rounded-full bg-black' aria-label='Otvori filter meni'>Filteri <SlidersHorizontal /></Button>
      <div className={`${isHidden ? "hidden" : "block"} lg:block h-screen fixed inset-0 z-50 bg-white p-6 lg:relative lg:p-0 lg:z-0`}>
        <div className="flex justify-between items-center mb-8 lg:hidden">
          <h2 className="text-xl font-bold">Filteri</h2>
          <button onClick={() => setIsHidden(true)} className="p-2">
            <X size={28} />
          </button>
        </div>
        {filters.map(filter => (
          <div key={filter.id} className={"flex flex-col border-gray-300 border border-l-transparent border-r-transparent border-b-transparent pt-5 pb-5"}>
            <p className={`${inter.className} flex justify-between mb-3 font-bold`}>
              {filter.title}
              <ChevronDown className="cursor-pointer" onClick={() => toggleSection(filter.id)}/>
            </p>
            <ul className={openSection === filter.id ? "flex flex-col h-full gap-2 transition-all duration-300" : "hidden transition-all duration-300"}>
              {filter.options.map(option => (
                <li key={option.value} className={`${inter.className} flex items-center gap-2`}>
                  <Checkbox checked={isChecked(filter.id, option.value)} onCheckedChange={() => toggleFilter(filter.id, option.value)}/>
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterComponent;