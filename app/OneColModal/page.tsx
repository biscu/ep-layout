import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
    <main className="flex bg-white flex-col items-center p-6 gap-6 min-h-screen dark:bg-neutral-900 rounded-lg">
      <div className="w-full max-w-3xl flex flex-col gap-6">
      <Header label="One Columns Full Page"/>
      <div className="flex gap-6 w-full flex-col-reverse md:flex-row">
          <div className="flex flex-col  w-full rounded-lg overflow-hidden h-fit">
            <ListItem />
            <ListItem />
            <ListItem /> 
            <ListItem />
          </div>
      </div>
      </div>
      </ main>
    </>
  );
}