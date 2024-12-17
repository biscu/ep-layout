import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen bg-white min-w-full flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg">
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
