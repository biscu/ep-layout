"use client"
import { CardItem } from "@/components/card-item";
import { Header } from "@/components/header";
import { useState } from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClasses = () => {
      setIsToggled(!isToggled);
  };
  return (
    <>
    <main className={`flex min-h-screen bg-white w-full flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg ${isToggled ? 'mx-auto w-full max-w-[1600px]' : ''}`}>
      <div className="flex items-center space-x-2"> 
        <Switch id="container-toggle" checked={isToggled} onCheckedChange={toggleClasses} />
        <Label htmlFor="container-toggle">Max width container</Label>
        </div>
      <Header label="Full Layout Card"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full flex-wrap">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      </ main>
    </>
  );
}