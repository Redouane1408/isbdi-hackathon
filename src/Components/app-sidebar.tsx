import * as React from "react"
import {
  //AudioWaveform,
  BookOpen,
  Bot,
  //Command,
  Frame,
  //GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Clock,
  //SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/Components/nav-main"
import { NavProjects } from "@/Components/nav-projects"
import { NavHistory } from "@/Components/nav-history"
import { NavUser } from "@/Components/nav-user"
//import { TeamSwitcher } from "@/Components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/Components/ui/sidebar"
import CustomLogo from "./ui/CustomLogo"


// This is sample data.
const data = {
  user: {
    name: "Mohamed",
    email: "m@example.com",
    avatar: "/public/CircleAvatar.svg",
  },

  navMain: [
    {
      title: "Ijara",
      url: "/Ijara",
      icon: CustomLogo.CustomLogo, // Access the specific component
      //isActive: true,
      
    },
    {      
      title: "Reverse Transaction",
      url: "/reversetransactions",
      icon: CustomLogo.CustomLogoo,
      // Remove the items array to prevent dropdown behavior
    },
    {
      title: "Musharaka",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },

      ],
    },
    {
      title: "Salam & Parallel Salam",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },
       
      ],
    },
    {
      title: "Istisna",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },
       
      ],
    },
    {
      title: "Ijarah",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },
       
      ],
    },
  ],
  projects: [
    {
      name: "Lorem ipsum dolor sit amet fghs",
      url: "#",
      icon: Frame,
    },
    {
      name: "Lorem ipsum dolor sitgs ",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Lorem ipsum dolor sitgs",
      url: "#",
      icon: Map,
    },
  ],
  history: [
    {
      name: "Recent Ijara Transaction",
      url: "#",
      icon: Clock,
    },
    {
      name: "Previous Musharaka Query",
      url: "#",
      icon: Clock,
    },
    {
      name: "Last Week's Analysis",
      url: "#",
      icon: Clock,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar 
      collapsible="icon" 
      className="bg-white border-r" 
      {...props}
    >
      <SidebarHeader>
        
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavHistory historyItems={data.history} />
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
