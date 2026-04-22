import ColorBends from '../ColorBends/ColorBends'
import DotFieldBackground from '../DotField/DotFieldBackground'

const HeroBackground = () => {
    return (
        <div className="absolute inset-0">
            <DotFieldBackground/>
            <div className="hero-colorbends-fade absolute inset-0 z-10">
                <ColorBends
                    colors={["#00ff35"]}
                    speed={0.5}
                    scale={1.5}
                    frequency={1.2}
                    warpStrength={1}
                    mouseInfluence={0.5}
                    noise={0.15}
                    parallax={0.5}
                    iterations={1}
                    intensity={1.2}
                    bandWidth={1.5}
                    rotation={80}
                    transparent
                />
            </div>
        </div>
    )
}

export default HeroBackground