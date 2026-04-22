import { useState } from 'react'
import AnimatedLink from './AnimatedLink'

const links = {
  resume: "",
  linkedin: "https://www.linkedin.com/in/niharika-sunwar-65537b2a2/",
  github: "https://github.com/aakirahin",
  dribbble: "https://dribbble.com/nihsunwar",
}

const Links = () => {
    const [hover, setHover] = useState({
        item: "",
        isHover: false
    })
    return (
        <div className="w-[400px]">
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