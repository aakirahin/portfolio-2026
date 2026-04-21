import React from 'react'
import GlowingBadge from './GlowingBadge'

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
        <section
            id={label}
            className={`${flexClass} ${className}`}
            aria-label={label}
        >
            <GlowingBadge label={label}/>
            {children}
        </section>
    )
}

export default Section