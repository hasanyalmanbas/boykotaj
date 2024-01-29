import { Brand } from '@/models/brand'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

type BrandCardProps = {
    brand: Brand
}

const RichTextField = (data: string) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />
}

export default function BrandCard({ brand }: BrandCardProps) {
    return (
        <section className="pb-12">
            <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                <div className="justify-center w-full text-center lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">
                        <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                            <Image
                                className="w-48 sm:w-72 bg-cover"
                                alt=''
                                src={`https://api.boykotaj.com/storage/uploads${brand.image.path}`}
                            />
                        </div>
                        <p className="mt-4 sm:px-32 sm:text-xl text-medium font-semibold tracking-tighter">
                            {brand.name}
                        </p>
                        {
                            (brand.description != null && brand.description != "") && (
                                <p className="sm:mt-8 mt-2.5 sm:px-8 md:px-16 lg:px-32  sm:leading-loose text-sm font-normal tracking-tighter">
                                    {RichTextField(brand.description)}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="text-center space-x-4 mt-6">
                <div className="bg-[#f31260] translate-y-1 text-[#fff] sm:text-lg text-medium font-bold py-2.5 px-6  rounded-full inline-flex items-center">
                    {
                        true ?
                            (
                                <>
                                    <FaExclamationTriangle size={24} />
                                    &nbsp; &nbsp;<span> {"BOYKOT"} </span>
                                </>
                            ) :
                            (
                                <>
                                    <FaCheckCircle size={24} />
                                    &nbsp; &nbsp;<span> {brand.risk.toUpperCase()} </span>
                                </>
                            )
                    }


                </div>
            </div>
        </section>

    )
}
