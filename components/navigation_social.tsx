import { Button, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link';
import ThemeSwitch from './theme_switch';

export default function NavSocial() {
    return (
        <NavbarItem className="flex gap-4 items-center">
            <ThemeSwitch />
            <Button
                variant='bordered'
                color='default'
                isIconOnly aria-label="Twitter"
                as={Link}
                href='https://twitter.com/GiriftStudio'
                target='_blank'
            >
                <FaXTwitter size={15} />
            </Button>
        </NavbarItem>
    )
}