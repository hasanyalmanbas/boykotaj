import { Divider, Image } from '@nextui-org/react'
import React from 'react'

export default function MapStatus() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Hikaye
                    </h2>
                    <p className="text-lg leading-8">
                        Gazze acil yardım bekliyor
                    </p>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
                        <dt className="text-sm font-light mt-1 leading-6">
                            Öncesi
                        </dt>
                        <dd className="order-first text-2xl font-bold tracking-tight ">
                            1948
                        </dd>

                        <Divider className='my-5' />

                        <Image
                            alt="nextui logo"
                            width={250}
                            radius="sm"
                            src="/img/map-1.png"
                        />
                    </div>
                    <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
                        <dt className="text-sm font-light mt-1 leading-6">
                            BM TAKSİM PLANI
                        </dt>
                        <dd className="order-first text-2xl font-bold tracking-tight ">
                            1947
                        </dd>

                        <Divider className='my-5' />

                        <Image
                            alt="nextui logo"
                            width={250}
                            radius="sm"
                            src="/img/map-2.png"
                        />
                    </div>
                    <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
                        <dt className="text-sm font-light mt-1 leading-6">
                            Yılı
                        </dt>
                        <dd className="order-first text-2xl font-bold tracking-tight ">
                            1967
                        </dd>

                        <Divider className='my-5' />

                        <Image
                            alt="nextui logo"
                            width={250}
                            radius="sm"
                            src="/img/map-3.png"
                        />
                    </div>
                    <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
                        <dt className="text-sm font-light mt-1 leading-6">
                            Günümüz
                        </dt>
                        <dd className="order-first text-2xl font-bold tracking-tight ">
                            GÜNCEL
                        </dd>
                        
                        <Divider className='my-5' />

                        <Image
                            alt="nextui logo"
                            width={250}
                            radius="sm"
                            src="/img/map-4.png"
                        />
                    </div>
                </dl>
                <div className="text-center space-y-4 mt-8">
                    <p className="text-medium leading-8">
                        İsrail'in 30 Mart 1976'da Filistinlilere ait binlerce dönüm araziye el koyması her yıl Toprak Günü olarak anılıyor. Tarihi Filistin toprakları üzerinde kurulan İsrail işgaline direnişin sembolü haline gelen Toprak Günü'nün kırk birinci yıl dönümü, giderek genişleyen İsrail işgalini yeniden gündeme taşıdı.
                    </p>
                    <p className="text-medium leading-8">
                        Filistin İstatistik Merkezinin Mart 2015 verilerine göre İsrail, 27 bin kilometrekarelik Filistin topraklarının yüzde 85'ine el koymuş durumda. Filistinliler ise bu alanın sadece yüzde 15'ini kullanabiliyor.
                    </p>
                </div>
            </div>
        </div>
    )
}
