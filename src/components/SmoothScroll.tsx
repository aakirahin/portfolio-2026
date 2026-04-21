import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode
}

const SmoothScroll = ({
    children
}: Props) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
    const y = useTransform(smoothProgress, value => {
        return value * -(contentHeight - window.innerHeight);
    });


    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef, children]);

    return (
        <>
            <div style={{ height: contentHeight }} />
            <motion.div
                className="scrollBody"
                ref={contentRef}
                style={{ 
                    y,
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default SmoothScroll