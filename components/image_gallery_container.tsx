'use client'

import React, { useEffect } from 'react'
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from 'react-photo-album'
import { Counter, Download, Share } from 'yet-another-react-lightbox/plugins';
import Link from 'next/link';
import { Image } from '@nextui-org/react';

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
                    <Link href={slides[index].source ?? ""}>

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
                                        <Link href={slide.source ?? ""} target='_blank'>
                                            <Image
                                                src={slide.src}
                                                className='h-fit object-cover'
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
                    </Link>

                )
            }

        </div>
    )
}
