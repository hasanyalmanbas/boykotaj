'use client'

import BrandTimelineCard from '@/components/brand_timeline_card'
import { Brand } from '@/models/brand';
import { Spinner, Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BrandCard from '@/components/brand_card';
import { Timeline } from '@/models/timeline';

/* { params }: { params: { id: string, slug: string } } */

export default function BrandDetail({ params }: { params: { slug: string } }) {
    const slug = params.slug

    const [data, setData] = useState<Brand>();
    const [timelineData, setTimelineData] = useState<Timeline[]>();
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
                setData(data)

                var filter = { 'brand._id': `${data._id}` };

                // Get Timeline Data
                const params = new URLSearchParams({ "filter": JSON.stringify(filter) });

                fetch(`https://api.boykotaj.com/api/content/items/timeline?` + params, {
                    method: "GET",
                    headers: {
                        "api-key": "API-f0c1821a1d447b015d1a0b1fe52f04f8ab2d600f",
                    },

                }).then((res) => {
                    return res.json();
                })
                    .then((timelineData) => {
                        setLoading(false);
                        setTimelineData(timelineData);
                        console.log(timelineData)

                    })


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
                                {

                                    timelineData != null && timelineData.length > 0 ? (
                                        timelineData.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <BrandTimelineCard
                                                    key={index}
                                                    title={item.title}
                                                    description={item.description}
                                                    date={item.date}
                                                    source={item.source}
                                                />
                                            )
                                        })
                                    ) : (
                                        <h2 className="text-medium font-extrabold tracking-tight sm:text-large my-8">
                                            <span className="">
                                                {`Açıklama verisi girilmemiş.`}
                                            </span>
                                        </h2>
                                    )
                                }
                            </>
                        )
                }
            </div>
        </main>
    )
}