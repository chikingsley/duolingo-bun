import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Trophy, Target, ShoppingBag } from 'lucide-react';

// Define the structure for sidebar items
const sidebarItems = [
  { label: "Learn", icon: LayoutDashboard, href: "/learn" },
  { label: "Leaderboard", icon: Trophy, href: "/leaderboard" },
  { label: "Quests", icon: Target, href: "/quests" },
  { label: "Shop", icon: ShoppingBag, href: "/shop" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroupLabel className="text-center text-xl">Duo-Bun</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.label}> 
                <SidebarMenuButton asChild className="w-full justify-start"> 
                  <a href={item.href}> 
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}