import * as React from "react"
import { useNavigate } from "react-router-dom"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/Components/ui/sidebar"

interface NavMainProps {
  items: {
    title: string
    url: string
    icon?: React.ElementType
    isActive?: boolean
    isHeader?: boolean
    items?: {
      title: string
      url: string
      icon?: React.ElementType
    }[]
  }[]
}

export function NavMain({ items }: NavMainProps) {
  const navigate = useNavigate()
  const [openMenus, setOpenMenus] = React.useState<number[]>([])

  const handleClick = (url: string, hasItems: boolean, index: number) => {
    if (hasItems) {
      toggleMenu(index)
    } else {
      navigate(url)
    }
  }

  const toggleMenu = (index: number) => {
    setOpenMenus(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    )
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, index) => {
          if (item.isHeader) {
            return (
              <SidebarGroupLabel key={index} className="text-gray-500 mt-2">
                {item.title}
              </SidebarGroupLabel>
            )
          }
          
          return (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                isActive={item.isActive}
                className={`text-gray-700 hover:bg-gray-100 ${item.isActive ? 'bg-blue-50 text-blue-600' : ''}`}
                tooltip={item.title}
                onClick={() => handleClick(item.url, !!item.items?.length, index)}
              >
                {item.icon && <item.icon className="mr-2" />}
                <span>{item.title}</span>
              </SidebarMenuButton>
              {item.items?.length && openMenus.includes(index) ? (
                <SidebarMenuSub>
                  {item.items.map((subItem, subIndex) => (
                    <SidebarMenuSubItem key={subIndex}>
                      <SidebarMenuButton 
                        className="text-gray-600 hover:bg-gray-100"
                        tooltip={subItem.title}
                        onClick={() => navigate(subItem.url)}
                      >
                        {subItem.icon && <subItem.icon className="mr-2" />}
                        <span>{subItem.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
