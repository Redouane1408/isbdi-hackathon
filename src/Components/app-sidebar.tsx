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
  //SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/Components/nav-main"
import { NavProjects } from "@/Components/nav-projects"
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
    avatar: "/public/Avatar.svg",
  },

  navMain: [
    {
      title: "Ijara",
      url: "#",
      icon: CustomLogo,
      isActive: true,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },

      ],
    },
    {
      title: "Murabaha",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Library",
          url: "#",
          icon: BookOpen,
        },

      ],
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
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
