import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type BrandTimelineProps = {
    title: string,
    date: string,
    description: string,
    source: string
}

const RichTextField = (data: string) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />
}

export default function BrandTimelineCard(props: BrandTimelineProps) {
    return (
        <div className="flex w-full gap-x-3">
            {/* Left Content */}
            <div className="w-1/5">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {props.date}
                </span>
            </div>
            {/* End Left Content */}
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow w-4/5 pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    <svg
                        className="flex-shrink-0 w-4 h-4 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1={16} x2={8} y1={13} y2={13} />
                        <line x1={16} x2={8} y1={17} y2={17} />
                        <line x1={10} x2={8} y1={9} y2={9} />
                    </svg>
                    {props.title}
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {RichTextField(props.description)}
                </p>

                {/* {
                    props.price != null && (
                        <p className="mt-1 text-sm ">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100]">
                                ${props.price}
                            </span>
                        </p>
                    )
                } */}

                <div className='flex flex-row justify-between items-center mt-4'>
                    <Link
                        href={props.source}
                        target='_blank'
                    >
                        <Button
                            color='default'
                            size='sm'
                            variant='ghost'
                        >
                            KAYNAK
                        </Button>
                    </Link>
                </div>
            </div>
            {/* End Right Content */}
        </div >
    )
}
