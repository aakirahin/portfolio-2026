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
        href: "/portfolio-2026/#Home",
    },
    {
        label: "Projects",
        href: "/portfolio-2026/#Projects",
    },
    {
        label: "About",
        href: "/portfolio-2026/#About",
    },
    {
        label: "Contact",
        href: "/portfolio-2026/#Contact",
    },
]

const NavBar = () => {
    const [hover, setHover] = useState({
        item: "",
        isHover: false
    })

    return (
        <div className="mx-6 md:mx-0 w-full md:w-3/4 xl:w-1/2 text-white justify-between flex font-mono items-center">
            <img
                src={logo}
                alt="Niharika Sunwar"
                height={36}
                width={36}
            />
            <div className="flex md:gap-12 gap-4">
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