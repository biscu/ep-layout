import Image from 'next/image'
import { Bell, MessageCircle, User, ChevronRight } from 'lucide-react'

export function ListItem() {
  return (
      <div className="bg-neutral-100 border-b-[1px] w-full p-4 flex flex-row justify-between items-center dark:bg-neutral-800 dark:border-neutral-700 ">
       <span>List item</span>
       <ChevronRight className='text-neutral-400 dark:text-neutral-400' />
      </div>
    )
}