
import React, { PropsWithChildren, ReactNode } from 'react'

type ContentProps = {
    title?: string,
    slogan?: string,
    content?: string
}

export default function ContentContainerNoneBackground({ children, title, content, slogan }: PropsWithChildren<ContentProps>) {
    return (
        <div
            className='w-full px-4 py-8 mx-4'
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
