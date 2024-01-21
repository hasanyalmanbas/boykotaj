'use client'

import ContentContainer from "@/components/content_container"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <main className="flex flex-col w-full h-screen fixed justify-center items-center p-4">
            <div className='container mx-auto flex flex-col justify-center items-center gap-4'>
                <ContentContainer>
                    <main className="h-screen w-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-800 tracking-wider">HATA</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-secondary-700 mt-4">Daha Sonra Tekrar deneyin</p>
                        <Button 
                            color="secondary"
                            variant="ghost"
                            radius="sm"
                            size="lg"
                            className="p-6   text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-secondary-700 mt-16"
                        >
                                Anasayfa
                        </Button>
                    </main>

                </ContentContainer>
            </div>
        </main>
    )
}