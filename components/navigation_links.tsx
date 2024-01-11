"use client"

import React from 'react'
import { Link, NavbarItem, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'

export default function NavLinks() {
    const menuList = [
        {
            name: "Ürünler",
            link: "/",
        },
        {
            name: "Markalar",
            link: "/brands",
        },
        {
            name: "Durum",
            link: "/status",
        },
    ];


    const [currentSection, setCurrentSection] = React.useState<string>()

    return (
        <>
            {
                menuList.map((item, index) => {
                    return (
                        <NavbarItem key={`${item.name}-${index}`} isActive={currentSection === item.name} >
                            <Link href={`${item.link}`} color={`${currentSection === item.name ? "warning" : "foreground"}`} className='font-bold'>
                                {item.name.toUpperCase()}
                            </Link>
                        </NavbarItem>
                    )
                })
            }

            <NavbarMenu className='z-[1000]'>
                {menuList.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            className="w-full"
                            color={`${currentSection === item.name ? "warning" : "foreground"}`}
                            href={`${item.link}`}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </>
    )
}