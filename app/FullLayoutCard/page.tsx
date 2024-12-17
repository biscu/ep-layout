import Image from "next/image";
import { CardItem } from "@/components/card-item";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen bg-white min-w-full flex-col p-6 gap-6 dark:bg-neutral-900 rounded-lg">
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