import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <>
      <main className="flex bg-white flex-col items-center p-6 gap-6 min-h-screen dark:bg-neutral-900 rounded-lg">
        <div className="w-full flex flex-col gap-6">
          <Header label="Sheet" />
          <div className="flex gap-6 w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Open</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>This is a sheet/drawer</SheetTitle>
                  <SheetDescription>
                    It has a fixed size of 512px, and full width on smaller breakpoint.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </>
  );
}
