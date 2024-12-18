import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Home() {
  return (
    <>
      <main className="flex bg-white flex-col items-center p-6 gap-6 min-h-screen dark:bg-neutral-900 rounded-lg">
        <div className="w-full max-w-[1176px] flex flex-col gap-6">
          <Header label="Two Column Full Page" />
          <div className="flex gap-6 w-full flex-col-reverse md:flex-row">
            <div className="flex flex-col md:w-2/3  w-full rounded-lg h-fit gap-6">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Label</Label>
                <Input type="email" id="email" placeholder="Placeholder" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Label</Label>
                <Input type="email" id="email" placeholder="Placeholder" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Label</Label>
                <Input type="email" id="email" placeholder="Placeholder" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Label</Label>
                <Input type="email" id="email" placeholder="Placeholder" />
              </div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full rounded-lg overflow-hidden min-h-10 dark:bg-neutral-800 p-6">
              <span>Supporting info</span>
            </div>
          </div>
        </div>
      </ main>
    </>
  );
}