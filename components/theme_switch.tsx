"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { FaMoon, FaLightbulb } from "react-icons/fa6";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            {
                mounted === true && (
                    <Button
                        isIconOnly
                        variant='bordered'
                        color={"default"}
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {
                            theme === 'light' ?
                                <FaMoon size={15} />
                                :
                                <FaLightbulb size={15} />
                        }
                    </Button>
                )
            }

        </>
    )
}