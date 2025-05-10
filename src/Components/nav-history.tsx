import {
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    type LucideIcon,
  } from "lucide-react"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
  import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@/Components/ui/sidebar"
  
  export function NavHistory({
    historyItems,
  }: {
    historyItems: {
      name?: string
      url: string
      icon: LucideIcon
    }[]
  }) {
    const { isMobile } = useSidebar()
  
    return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel>HISTORY</SidebarGroupLabel>
        <SidebarMenu>
          {historyItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <Folder className="text-muted-foreground" />
                    <span>View Item</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Forward className="text-muted-foreground" />
                    <span>Share Item</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>Remove from History</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal className="text-sidebar-foreground/70" />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    )
  }