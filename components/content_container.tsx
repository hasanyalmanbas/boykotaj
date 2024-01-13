import React, { PropsWithChildren, ReactNode } from 'react'

type ContentProps = {
    title?: string,
    slogan?: string,
    content?: string
}

export default function ContentContainer({ children, title, content, slogan }: PropsWithChildren<ContentProps>) {
    return (
        <div
            className='bg-white w-full dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8 mx-4'
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
