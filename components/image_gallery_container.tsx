'use client'

import React, { useEffect } from 'react'
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from 'react-photo-album'
import { Counter, Download, Share } from 'yet-another-react-lightbox/plugins';
import { Image } from '@nextui-org/react';
import { CustomSlide, DenemeSlide } from '@/data/filistin_slide_data';
import Link from 'next/link';

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
                                    <Link
                                        href={(slide as DenemeSlide).source!}
                                        target='_blank'
                                    >
                                        <Image
                                            className='sm:w-[90vw] sm:h-auto md:w-auto md:h-[90vh] bg-cover rounded-3xl cursor-pointer'
                                            src={(slide as DenemeSlide).src}
                                            alt=''
                                        />
                                    </Link>
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
