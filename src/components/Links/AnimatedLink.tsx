import { HashLink } from 'react-router-hash-link';
import DecryptedText from '../DecryptedText';

type Hover = {
    item: string,
    isHover: boolean
}

type Props = {
    item: any
    hover: Hover
    setHover: (hover: Hover) => void
}

const AnimatedLink = ({
    item,
    hover,
    setHover
}: Props) => {
    const { label, href } = item
    return (
        <span 
            onMouseEnter={() => setHover({ item: label, isHover: true })}
            onMouseLeave={() => setHover({ item: "", isHover: false })}
        >
            {hover.isHover && hover.item === label && "> "}
            <HashLink smooth to={href} className="hover:border-b">
                <DecryptedText
                    text={label}
                    speed={100}
                    maxIterations={20}
                    characters="1#*&%0@!?"
                    revealDirection="start"
                    sequential
                />
            </HashLink>
        </span>
    )
}

export default AnimatedLink