import DotField from './DotField'

const DotFieldBackground = () => {
    return (
        <DotField
            dotRadius={2.5}
            dotSpacing={15}
            cursorRadius={500}
            cursorForce={0.10}
            bulgeOnly={true}
            bulgeStrength={40}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
        />
    )
}

export default DotFieldBackground