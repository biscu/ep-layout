import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
    <main className="flex bg-white flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg">
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
      </ main>
    </>
  );
}