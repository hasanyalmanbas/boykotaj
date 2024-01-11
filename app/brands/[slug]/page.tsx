'use client'

import BrandTimelineCard from '@/components/brand_timeline_card'
import { Brand } from '@/models/brand';
import { Spinner, Image, Badge, Avatar, Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaCalendar } from 'react-icons/fa6'
import { useSearchParams } from 'next/navigation'
import BrandCard from '@/components/brand_card';

/* { params }: { params: { id: string, slug: string } } */

export default function BrandDetail({ params }: { params: { slug: string } }) {
    const slug = params.slug

    const [data, setData] = useState<Brand>();
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        fetch(`https://api.boykotaj.com.tr/api/content/item/brand?filter={slug:\%27${slug}\%27}&populate=-1`, {
            method: "GET",
            headers: {
                "api-key": "API-b7f4a3972c33db263e9ac5cbb2c9355937af3441"
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
                                <BrandTimelineCard
                                    time='21.07.2014'
                                    title={`Coca-Cola'dan İsrail açıklaması`}
                                    description={`Coca-Cola Türkiye, şirketin gelirinin İsrail’e aktarıldığı iddiasının tamamen gerçek dışı olduğunu, Filistin’de 3 fabrikası, biri Gazze’de olmak üzere 7 satış ve dağıtım merkezi bulunduğunu bildirdi.`}
                                    price={"1.500.000"}
                                />

                                <BrandTimelineCard
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
                                />
                            </>
                        )
                }
            </div>
        </main>
    )
}