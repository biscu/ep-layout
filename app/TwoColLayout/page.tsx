"use client"
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClasses = () => {
      setIsToggled(!isToggled);
  };
  return (
    <>
    <main className="flex bg-white flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg">
    <div className={`flex flex-col gap-6 ${isToggled ? 'mx-auto w-full max-w-[1176px]' : ''}`}> 
      <Header label="Two Columns Layout"/>
      <div className="flex sm:flex-row gap-6 flex-col max-w-[1176px] justify-start">
        <div className="flex flex-col md:w-1/3 sm:w-full rounded-lg overflow-hidden h-fit">
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div className="flex flex-col md:w-2/3 sm:w-full rounded-lg overflow-hidden h-fit">
          <ListItem />
          <ListItem />
          <ListItem /> 
          <ListItem />
        </div>
      </div>
      <Button variant="outline" className="max-w-[1176px]" onClick={toggleClasses}>Swap Center / Left</Button>
      </div>
      </ main>
    </>
  );
}