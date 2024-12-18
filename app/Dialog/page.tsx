import Image from "next/image";
import { ListItem } from "@/components/list-item";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <>
      <main className="flex bg-white flex-col items-center p-6 gap-6 min-h-screen dark:bg-neutral-900 rounded-lg">
        <div className="w-full flex flex-col gap-6">
          <Header label="Dialog" />
          <div className="flex gap-6 w-full ">
          <Dialog>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>This is a dialog</DialogTitle>
                  <DialogDescription>
                    It has a fixed size of 512px and it centered on the screen.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </>
  );
}
