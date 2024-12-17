import Image from 'next/image'
import { Bell, MessageCircle, User, ChevronRight } from 'lucide-react'

export function CardItem() {
  return (
      <div className="bg-neutral-100 border-b-[1px] w-full p-4 flex flex-col justify-between items-start dark:bg-neutral-800 rounded-lg gap-3 ">
       <span className='text-lg'>Card item</span>
       <span className="dark:text-neutral-400 text-neutral-600">Card description that goes a bit longer in multiple lines.</span>
       <MessageCircle className='text-neutral-400 dark:text-neutral-400' />
      </div>
    )
}