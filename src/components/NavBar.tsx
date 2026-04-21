import { useState } from "react"
import DecryptedText from "./DecryptedText"
import logo from "../assets/logo.png"
import { HashLink } from 'react-router-hash-link';

type NavItem = {
    label: string
    href: string
}

const navItems: NavItem[] = [
    {
        label: "Home",
        href: "/#Home",
    },
    {
        label: "Projects",
        href: "/#Projects",
    },
    {
        label: "About",
        href: "/#About",
    },
    {
        label: "Contact",
        href: "/#Contact",
    },
]

const NavBar = () => {
    const [hover, setHover] = useState({
        item: "",
        isHover: false
    })

    return (
        <div className="w-1/2 text-white rounded-lg justify-between flex font-mono items-center ">
            <img
                src={logo}
                alt="Niharika Sunwar"
                height={36}
                width={36}
            />
            <div className="flex gap-12">
                {
                    navItems.map((item) => (
                        <span 
                            key={item.label} 
                            onMouseEnter={() => setHover({ item: item.label, isHover: true })}
                            onMouseLeave={() => setHover({ item: "", isHover: false })}
                        >
                            {hover.isHover && hover.item === item.label && "> "}
                            <HashLink smooth to={item.href} className="hover:border-b">
                                <DecryptedText
                                    text={item.label}
                                    speed={100}
                                    maxIterations={20}
                                    characters="1#*&%0@!?"
                                    revealDirection="start"
                                    sequential
                                    className="transition-colors duration-200 group-hover:text-white/75"
                                    encryptedClassName="transition-colors duration-200 group-hover:text-white/65"
                                />
                            </HashLink>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar