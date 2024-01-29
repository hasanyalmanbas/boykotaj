'use client'

import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from 'react-photo-album'
import { Counter, Download, Share } from 'yet-another-react-lightbox/plugins';
import { Image, Link } from '@nextui-org/react';
import { DenemeSlide } from '@/data/filistin_slide_data';

export default function ImageGalleryContainer({ slides }: { slides: any }) {
    const [index, setIndex] = React.useState(-1);

    return (
        <div className='w-full h-full'>
            <PhotoAlbum
                layout="masonry"
                photos={slides}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)}
            />

            {
                index >= 0 && (
                    <Lightbox
                        index={index}
                        slides={slides}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        plugins={[Download, Share, Counter]}
                        render={{

                            slide: ({ slide, offset, rect }) => {
                                console.log(slide)
                                return (
                                    <div className='w-full flex flex-col pl-12 pr-8 justify-center items-center gap-y-4'>
                                        <Image
                                            className='sm:w-[90vw] sm:h-auto md:w-auto md:h-[90vh] mx-auto bg-cover rounded-3xl cursor-pointer'
                                            src={(slide as DenemeSlide).src}
                                            alt=''
                                        />
                                        <Link
                                            href={(slide as DenemeSlide).source!}
                                            target='_blank'
                                        >
                                            Kaynağa Git
                                        </Link>
                                    </div>
                                )
                            },
                        }}

                    /*  on={{
                         click: (clickCallback) => {
 
                             router.push(slides[index].sources, {
 
                             });
                         }
                     }} */
                    />
                )
            }

        </div>
    )
}
