import { Image } from '@nextui-org/react';
import styles from './styles.module.scss';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import LightboxImageContainer from '@/components/lightbox_image_container';
import Link from 'next/link';

var listZoomItems = [
    "https://www.insamer.com/tr/uploads/gallery/infografik-bati-seria-nin-ilhak-karari_3001.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-bati-seria-nin-ilhaki_3000.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-filistin-de-saglik-altyapisi-cokmek-uzere_2939.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-gazze-acik-hava-hapishanesine-donustu_2938.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-ablukanin-caldigi-gelecek-filistinli-cocuklar_2937.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-gazze-neresi_2936.jpg",
    "https://www.insamer.com/tr/uploads/gallery/infografik-dunyada-yaklasik-7-milyon-filistinli-multeci-yasiyor_2935.jpg",
];

export default function ZoomContainer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start center', 'end center']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 7]);

    const pictures = [
        {
            src: listZoomItems[0],
            scale: scale4
        },
        {
            src: listZoomItems[1],
            scale: scale5
        },
        {
            src: listZoomItems[2],
            scale: scale6
        },
        {
            src: listZoomItems[3],
            scale: scale5
        },
        {
            src: listZoomItems[4],
            scale: scale6
        },
        {
            src: listZoomItems[5],
            scale: scale8
        },
        {
            src: listZoomItems[6],
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>

                                <Image
                                    src={src}
                                    alt="image"
                                    width={300}
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
