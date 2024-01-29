'use client'

import React from 'react'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import NavSocial from './navigation_social';
import NavLinks from './navigation_links';
import Feedback from './feedback';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarBrand>
                <Link href='/' color="foreground">
                    <p className="font-bold text-xl leading-3 tracking-wider text-inherit">BOYKOTAJ</p>
                    {
                        /*
                         <Image priority={true} src={"/logo.png"} alt="Girift Studio Logo" width={166} height={75} className="block dark:hidden" />
                        <Image priority={true} src={"/logo-dark.png"} alt="Girift Studio Logo" width={166} height={75} className="hidden dark:block" /> 
                        */
                    }
                </Link>
            </NavbarBrand>
            {/* Mobile */}
            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavLinks />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavSocial />
                <NavbarItem>
                    <Feedback />
                </NavbarItem>
            </NavbarContent>

        </Navbar>

    )
}
