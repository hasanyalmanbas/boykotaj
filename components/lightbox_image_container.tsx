import { Image, Link } from '@nextui-org/react';
import React from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

export default function LightboxImageContainer({ imagePath, url, width = 0 }: { imagePath: string, url: string, width?: number }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            {
                width === 0 ?
                    (
                        <Image
                            src={imagePath}
                            onClick={() => setOpen(true)}
                            alt=''
                        />
                    ) :
                    (
                        <Image
                            src={imagePath}
                            onClick={() => setOpen(true)}
                            alt=''
                        />
                    )
            }


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
                            <div className='w-full flex flex-col justify-center items-center gap-y-4'>
                            <Image
                                className='sm:w-[95vw] sm:h-auto md:w-auto md:h-[90vh] mx-auto bg-cover rounded-3xl cursor-pointer'
                                src={imagePath}
                                alt=''
                            />
                            <Link
                                href={url}
                                target='_blank'
                            >
                                Kaynağa Git
                            </Link>
                        </div>
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
