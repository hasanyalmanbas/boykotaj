import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

export default function LightboxImageContainer({ imagePath, url }: { imagePath: string, url: string }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Image
                src={imagePath}
                onClick={() => setOpen(true)}
                alt=''
            />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                portal={{}}
                styles={{ container: { background: "rgba(0, 0, 0, 0.85)" } }}
                render={{
                    buttonNext() {
                        return null;
                    },
                    buttonPrev() {
                        return null;
                    },
                    slideContainer() {
                        return (
                            <Link
                                href={url}
                                target='_blank'
                            >
                                <Image
                                    className='sm:w-[90vw] sm:h-auto md:w-auto md:h-[90vh] bg-cover rounded-3xl cursor-pointer'
                                    src={imagePath}
                                    alt=''
                                />
                            </Link>
                        )
                    }
                }}
                index={0}
                labels={{ Next: "Next slide" }}
                slides={[
                    { src: imagePath },
                ]}
            />
        </>
    )
}
