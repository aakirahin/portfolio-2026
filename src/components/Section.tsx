import React from 'react'
import GlowingBadge from './GlowingBadge'
import { motion } from 'framer-motion'

type Props = {
    label: string
    className?: string
    children?: React.ReactNode
}

const flexClass = "section-border flex-col gap-16"

const Section = ({
    label,
    className,
    children
}: Props) => {
    return (
        <motion.section
            id={label}
            className={`${flexClass} ${className}`}
            aria-label={label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <GlowingBadge label={label}/>
            {children}
        </motion.section>
    )
}

export default Section