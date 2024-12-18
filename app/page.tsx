"use client"

import { ListItem } from "@/components/list-item";
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
      <Header label="Full Layout List"/>
      <div className="flex flex-col w-full rounded-xl overflow-hidden">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      </ main>
    </>
  );
}
