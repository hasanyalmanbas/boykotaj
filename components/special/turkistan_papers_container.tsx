import { Headline } from '@/models/timeline_data';
import { useTransform, motion, useScroll } from 'framer-motion';

import React from 'react'
import Link from 'next/link';
import { Image } from '@nextui-org/react';

const Box = ({ headline, index }: { headline: Headline, index: number }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 0 % 2 === 0 ? 50 : -50,
                y: -50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                y: 0,
                transition: {
                    duration: 0.05, // Animation duration
                    delay: index * 0.05,
                }
            }}
            viewport={{ once: true }}
            className={``}
        >
            <Link href={headline.source} target='_blank'>
                <Image
                    src={headline.image}
                    alt='image'
                    className='h-auto max-w-full rounded-lg'
                />
            </Link>
        </motion.div>
    );
};
export default function TurkistanPapersContainer({ headlines }: { headlines: Headline[] }) {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-y-4">
                <Box headline={headlines[0]} index={1} />
                <Box headline={headlines[1]} index={4} />
                <Box headline={headlines[2]} index={7} />
            </div>
            <div className="flex flex-col gap-y-4">
                <Box headline={headlines[3]} index={2} />
                <Box headline={headlines[4]} index={5} />
                <Box headline={headlines[5]} index={8} />
            </div>
            <div className="flex flex-col gap-y-4">
                <Box headline={headlines[6]} index={3} />
                <Box headline={headlines[7]} index={6} />
                <Box headline={headlines[8]} index={9} />
            </div>
        </div>
    )
}
