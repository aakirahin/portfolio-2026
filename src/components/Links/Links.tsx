import { useState } from 'react'
import { dribbble, github, linkedin, resume } from '../../lib/links'
import AnimatedLink from './AnimatedLink'

const links: Record<string, string> = {
  resume: resume,
  linkedin: linkedin,
  github: github,
  dribbble: dribbble,
}

const Links = () => {
    const [hover, setHover] = useState({
        item: "",
        isHover: false
    })
    return (
        <div className="md:w-1/2 xl:w-1/3 w-full md:px-0 px-8">
            <div className="flex justify-between w-full font-mono uppercase">
                {
                    Object.keys(links).map((key) => (
                        <AnimatedLink
                            key={key}
                            item={{
                                label: key,
                                href: links[key]
                            }}
                            hover={hover}
                            setHover={setHover}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Links