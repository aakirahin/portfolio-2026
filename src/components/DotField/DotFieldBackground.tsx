import DotField from './DotField'

const DotFieldBackground = () => {
    return (
        <div className="absolute inset-0 -z-1">
            <DotField
                dotRadius={2}
                dotSpacing={10}
                cursorRadius={500}
                cursorForce={0.10}
                bulgeOnly={true}
                bulgeStrength={40}
                glowRadius={160}
                sparkle={false}
                waveAmplitude={0}
            />
        </div>
    )
}

export default DotFieldBackground