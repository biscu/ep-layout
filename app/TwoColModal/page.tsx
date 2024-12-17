import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
    <main className="flex bg-white flex-col items-center p-6 gap-6 min-h-screen dark:bg-neutral-900 rounded-lg">
      <div className="w-full max-w-7xl flex flex-col gap-6">
      <Header label="Two Column Modal"/>
      <div className="flex gap-6 w-full flex-col-reverse md:flex-row">
          <div className="flex flex-col md:w-2/3  w-full rounded-lg overflow-hidden h-fit">
            <ListItem />
            <ListItem />
            <ListItem /> 
            <ListItem />
          </div>
          <div className="flex flex-col md:w-1/3 w-full rounded-lg overflow-hidden h-fit">
            <ListItem />
            <ListItem />
          </div>
      </div>
      </div>
      </ main>
    </>
  );
}