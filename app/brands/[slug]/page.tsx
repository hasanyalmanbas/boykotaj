'use client'

import BrandTimelineCard from '@/components/brand_timeline_card'
import { Brand } from '@/models/brand';
import { Spinner, Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BrandCard from '@/components/brand_card';

/* { params }: { params: { id: string, slug: string } } */

export default function BrandDetail({ params }: { params: { slug: string } }) {
    const slug = params.slug

    const [data, setData] = useState<Brand>();
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        fetch(`https://api.boykotaj.com/api/content/item/brand?filter={slug:\%27${slug}\%27}&populate=-1`, {
            method: "GET",
            headers: {
                "api-key": "API-f0c1821a1d447b015d1a0b1fe52f04f8ab2d600f"
            }
        })
            .then((res) => {
                return res.json();
            })
            .catch(() => {
                router.push(`/404`)
                throw new Error('Failed to fetch invoice.');

            })
            .then((data) => {
                setLoading(false)
                setData(data)
            })

    }, [router, slug])


    return (
        <main className="flex flex-col w-full justify-center items-center p-4">
            <div className='container mx-auto flex flex-col justify-center items-center gap-4'>
                {
                    isLoading ? (
                        <div className='container mx-auto flex justify-center items-center'>
                            <Spinner color='current' />
                        </div>
                    )
                        :
                        (
                            <>
                                <BrandCard brand={data!} />
                                {/* <h1 className="text-2xl text-center font-bold mb-6">{"Zaman Çizelgesi"}</h1> */}
                                <Divider />
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl my-8">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100]">
                                        {`Açıklamalar`}
                                    </span>
                                </h2>
                                <BrandTimelineCard
                                    time='21.07.2014'
                                    title={`${data?.name}'dan yapılan açıklama`}
                                    description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                                    /* price={"1.500.000"} */
                                />

                                {/* <BrandTimelineCard
                                    time='12:05'
                                    title={'Created "Preline in React" task'}
                                    description={'Find more detailed insctructions here.'}
                                />

                                <BrandTimelineCard
                                    time='21:55'
                                    title={'Release v5.2.0 quick bug fix 🐞'}
                                    description={''}
                                />

                                <BrandTimelineCard
                                    time='09:35'
                                    title={'Marked "Install Charts" completed'}
                                    description={'Finally! You can check it out here.'}
                                />

                                <BrandTimelineCard
                                    time='15:10'
                                    title={'Take a break ⛳️'}
                                    description={'Just chill for now... 😉'}
                                /> */}
                            </>
                        )
                }
            </div>
        </main>
    )
}