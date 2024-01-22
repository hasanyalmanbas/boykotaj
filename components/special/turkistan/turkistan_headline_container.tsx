import { TimelineData } from '@/models/timeline_data';
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'


const data = [
    { img: "https://static.daktilo.com/sites/71/uploads/2022/09/13/dogu-turkistanda-zulum-suruyor.jpeg", alt: "image1" },
    { img: "https://tgsp.org.tr/tr/frontend/storage/blogs/dogu-turkistan-icin-eller-duaya-kalkti-ca0f60c.jpeg", alt: "image2" },
    { img: "https://ordaf.org/wp-content/uploads/2021/02/china-uyghur.jpg", alt: "image3" },
    { img: "https://static.daktilo.com/sites/71/uploads/2022/09/13/dogu-turkistanda-zulum-suruyor.jpeg", alt: "image4" },
    { img: "https://tgsp.org.tr/tr/frontend/storage/blogs/dogu-turkistan-icin-eller-duaya-kalkti-ca0f60c.jpeg", alt: "image5" },
    { img: "https://ordaf.org/wp-content/uploads/2021/02/china-uyghur.jpg", alt: "image6" },
];

export default function TurkistanHeadlineContainer({ id, timelines }: { id: number, timelines: TimelineData[] }) {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical", // vertical, horizontal
        gestureDirection: "vertical", // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
    });

    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <div className="w-full h-full flex text-start justify-center items-center flex-col">
            {timelines.map((timeline, index) => {
                return <ImageComp key={index} timeline={timeline} index={index} />;
            })}
        </div>
    );
}


export function ImageComp({ timeline, index }: { timeline: TimelineData, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(
        scrollYProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        ["20%", "-20%"]
    );

    return (
        <div className="w-full h-full overflow-hidden flex flex-col" ref={ref}>
            {
                timeline.title != "" && (
                    <h2 className='my-4 text-xl font-extrabold tracking-tight sm:text-2xl text-ellipsis'>
                        {timeline.title}
                    </h2>
                )
            }

            <motion.img className='w-full scale-125' src={timeline.image} alt={""} style={{ translateY: translateY }} />
            <p className='my-8 text-sm font-extrabold tracking-tight sm:text-sm'>
                {timeline.description}
            </p>
        </div>
    );
}
