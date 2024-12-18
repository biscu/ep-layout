"use client"
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

    const toggleClasses = () => {
        setIsToggled(!isToggled);
    };

  return (
    <>
    <main className="flex bg-white h-screen flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg">
    <div className={`flex transition-all flex-col gap-6 ${isToggled ? 'mx-auto w-full max-w-[800px]' : ''}`}> 
      <Header label="One Columns Layout"/>
      <div className="flex sm:flex-row gap-6 flex-col max-w-[800px]">
        <div className="flex flex-col w-full rounded-lg overflow-hidden h-fit">
          <ListItem noIcon />
          <ListItem noIcon />
          <ListItem noIcon /> 
          <ListItem noIcon />
        </div>
      </div>
      <div className="flex items-center space-x-2">
      <Switch id="container-toggle" checked={isToggled} onCheckedChange={toggleClasses} />
      <Label htmlFor="container-toggle">Center</Label>
      </div>
      </div>
      </ main>
    </>
  );
}