import { TimelineData } from '@/models/timeline_data'
import { Card, CardHeader, Divider, CardBody, CardFooter, Link, Image } from '@nextui-org/react'
import React from 'react'

type StatusTimelineProps = {
    data: TimelineData
}

export default function StatusTimelineCardLeft({ data }: StatusTimelineProps) {
    return (
        <div className="flex flex-row-reverse md:contents">
            <div className="border-2 dark:border-white/10 border-black/10 px-4 py-4 rounded-2xl col-start-1 col-end-5 p-4 my-4 ml-auto">
                <h3 className="font-semibold text-lg mb-1"> {data.name}</h3>
                <p className="leading-tight text-justify">
                    {data.description}
                </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
            </div>
        </div>
    )
}
