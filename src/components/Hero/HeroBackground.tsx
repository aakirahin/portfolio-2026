import { lazy, Suspense } from 'react'
const ColorBends = lazy(() => import('../ColorBends/ColorBends'))

const HeroBackground = () => {
    return (
        <div className="hero-colorbends-fade absolute inset-0 z-10">
                <Suspense fallback={null}>
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
            </Suspense>
        </div>
    )
}

export default HeroBackground