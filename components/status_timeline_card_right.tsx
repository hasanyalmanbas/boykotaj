import { TimelineData } from '@/models/timeline_data'
import { Card, CardHeader, Divider, CardBody, CardFooter, Link, Image } from '@nextui-org/react'
import React from 'react'


type StatusTimelineProps = {
    data: TimelineData
}


export default function StatusTimelineCardRight({ data }: StatusTimelineProps) {
    return (
        <div className={`flex md:contents flex-row-reverse`}>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300" />
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 rounded-xl col-start-6 col-end-10 mr-auto">
                <>
                    <div className="absolute max-w-[26rem] whitespace-normal break-words rounded-lg border-2 border-black/10 bg-white dark:bg-black p-4 font-sans text-sm font-normal shadow-lg dark:shadow-white/5 shadow-black/10 focus:outline-none">
                        <div className="mb-2 flex items-center gap-3">
                            <a
                                href="#"
                                className="block font-sans text-base font-medium leading-relaxed tracking-normal  antialiased transition-colors hover:text-pink-500"
                            >
                                {data.name}
                            </a>
                            <div className="center relative inline-block select-none whitespace-nowrap rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white">
                                <div className="mt-px">Public</div>
                            </div>
                        </div>
                        {/*   <Image
                            alt="nextui logo"
                            width={250}
                            radius="sm"
                            src="/img/map-1.png"
                        /> */}
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                            {data.description}
                        </p>
                        <div className="mt-4 flex items-center gap-5">
                            <div className="flex items-center gap-1">
                                <span className="h-3 w-3 rounded-full bg-blue-400" />
                                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                                    TypeScript
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="-mt-0.5 h-4 w-4 text-yellow-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                                    3,480
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="-mt-px h-4 w-4 text-green-300"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                                    Veritied
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                        <div className="text-sm text-gray-700 py-1">
                            Made with{" "}
                            <a
                                className="text-gray-700 font-semibold"
                                href="https://www.material-tailwind.com/docs/html/popover?ref=tailwindcomponents"
                                target="_blank"
                            >
                                Material Tailwind
                            </a>{" "}
                            by{" "}
                            <a
                                href="https://www.creative-tim.com?ref=tailwindcomponents"
                                className="text-gray-700 font-semibold"
                                target="_blank"
                            >
                                {" "}
                                Creative Tim
                            </a>
                            .
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}
