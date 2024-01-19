"use client"

import React from 'react'
import { Button, Image, Link, NavbarItem, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { FaXTwitter } from 'react-icons/fa6';
import ThemeSwitch from './theme_switch';

export default function NavLinks() {
    const menuList = [
        {
            name: "Ürünler",
            link: "/",
        },
        {
            name: "Doğu Türkistan",
            link: "/dogu-turkistan",
            icon: "/img/bayrak-dogu-turkistan.svg"
        },
        {
            name: "Filistin",
            link: "/filistin",
            icon: "/img/bayrak-filistin.svg"
        },
    ];


    const [currentSection, setCurrentSection] = React.useState<string>()

    return (
        <>
            {
                menuList.map((item, index) => {
                    return (
                        <NavbarItem key={`${item.name}-${index}`} isActive={currentSection === item.name} >
                            <Link href={`${item.link}`} color={`${currentSection === item.name ? "warning" : "foreground"}`} className='font-bold gap-x-2'>

                                {
                                    item.icon != null && (
                                        <Image
                                            width={24}
                                            height={24}
                                            src={item.icon}
                                            alt={item.name}
                                        />
                                    )
                                }
                                <div
                                    className=''
                                >
                                    {item.name.toUpperCase()}
                                </div>
                            </Link>
                        </NavbarItem>
                    )
                })
            }

            <NavbarMenu className='z-[1000] flex flex-col gap-y-8'>
                <div>
                    {menuList.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                className="w-full"
                                color={`${currentSection === item.name ? "warning" : "foreground"}`}
                                href={`${item.link}`}
                                size="lg"
                            >
                                {item.name}

                                {
                                    item.icon != null && (
                                        <Image
                                            className='ml-4'
                                            width={24}
                                            height={24}
                                            src={item.icon}
                                            alt={item.name}
                                        />
                                    )
                                }

                            </Link>

                        </NavbarMenuItem>
                    ))}
                </div>
                <NavbarMenuItem
                    className='flex flex-row gap-x-2'
                >
                    <Button
                        variant='bordered'
                        color='default'
                        size='lg'
                        isIconOnly aria-label="Twitter"
                        as={Link}
                        href='https://twitter.com/BoykotajApp'
                        target='_blank'
                    >
                        <FaXTwitter size={15} />
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </>
    )
}