import { useState } from 'react'
import AnimatedLink from './AnimatedLink'

const links = {
  resume: "https://drive.google.com/file/d/1JjoT2Pc-dFPPemc2l_pdK01Q2NcD1p80/view?usp=sharing",
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