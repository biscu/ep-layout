import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
  } from "@/components/ui/sidebar"
  import { Calendar, Home, Inbox, Link, Search, Settings, Rows3, LayoutGrid, Columns2, RectangleVertical, Square, SquareSplitHorizontal } from "lucide-react"
  import { ThemeToggle } from "@/components/theme-toggle";


  // Menu items.
const items = [
  {
    title: "Full Layout List",
    url: "/",
    icon: Rows3,
  },
  {
    title: "Full Layout Card",
    url: "/FullLayoutCard",
    icon: LayoutGrid,
  },
  {
    title: "Two Columns Layout",
    url: "/TwoColLayout",
    icon: Columns2,
  },
  {
    title: "One Column Layout",
    url: "/OneColLayout",
    icon: RectangleVertical,
  },
  {
    title: "Two Columns Full Page",
    url: "/TwoColModal",
    icon: SquareSplitHorizontal,
  },
  {
    title: "One Column Full Page",
    url: "/OneColModal",
    icon: Square,
  },
  {
    title: "Modal & Sheet",
    url: "/Dialog",
    icon: Square,
  },
]
   
  export function AppSidebar() {
    return (
      <Sidebar collapsible="icon" className="bg-white">
        <div className="flex flex-col p-2 gap-2">
          <SidebarTrigger />
          <ThemeToggle/>
          </div>
      <SidebarContent>
        <SidebarGroup className="pt-18">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="w-6 h-6" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    )
  }