import { useState } from "react"
import logo from "../assets/logo.png"
import AnimatedLink from "./Links/AnimatedLink";

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
        <div className="w-1/2 text-white rounded-lg justify-between flex font-mono items-center">
            <img
                src={logo}
                alt="Niharika Sunwar"
                height={36}
                width={36}
            />
            <div className="flex gap-12">
                {
                    navItems.map((item) => (
                        <AnimatedLink 
                            key={item.label}
                            item={item} 
                            hover={hover} 
                            setHover={setHover}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar