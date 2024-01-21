import { useInView } from 'framer-motion';
import React, { PropsWithChildren, ReactNode, useRef } from 'react'

type ContentProps = {
}

export default function AnimatedContentContainer({ children }: PropsWithChildren<ContentProps>) {

    return (
        <section
            className='bg-white w-full dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8 mx-4'
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </section>
    )
}
