import Image from 'next/image'
import Link from 'next/link'
import { Bell, MessageCircle, User } from 'lucide-react'

export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="container w-full">
        <div className="flex h-16 items-center justify-between">
        <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={32}
              className="mr-2"
            />
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Bell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Messages</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <User className="h-6 w-6" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}