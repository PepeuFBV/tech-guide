import React from "react"

type SidebarEntry = {
    id: number,
    title: string
    href: string // /path
    icon: React.ReactNode
    items?: SidebarItem[]
}

type SidebarItem = {
    id: number
    title: string
    href: string // /path/path
}

export type { SidebarEntry, SidebarItem }
