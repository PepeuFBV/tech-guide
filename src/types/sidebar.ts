import React from "react"

type SidebarEntry = {
    title: string
    href: string // /path
    icon: React.ReactNode
    items?: SidebarItem[]
}

type SidebarItem = {
    title: string
    href: string // /path/path
}

export type { SidebarEntry, SidebarItem }
