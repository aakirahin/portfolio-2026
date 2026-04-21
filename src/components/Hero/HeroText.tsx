import { Link } from 'react-router';
import TextType from '../TextType/TextType'
import { HashLink } from 'react-router-hash-link';

const buttonClass = "font-mono p-2 rounded-sm px-[12px] py-[8px] border duration-300 transition-all backdrop-blur-xs"

const HeroText = () => {
    return (
        <div className="z-10 flex flex-col gap-12 w-1/2 bg-white/2 backdrop-blur-sm p-4 rounded-[30px]">
            <span className='px-4 py-2 bg-white/10 w-fit rounded-full text-sm'>Portfolio 2026</span>
            <div className='space-y-4'>
                <TextType 
                    text="Hi! I'm Niharika"
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                    loop={false}
                    className="text-6xl font-semibold font-mono"
                />
                <p>
                    👋 I'm a full-stack engineer with ~4 years of experience building scalable SaaS applications, with a deep fundamental understanding of React and JavaScript.
                    I focus on performance and maintainability, with particular strength in frontend and UI/UX.
                </p>
            </div>
            <div className='flex gap-4'>
                <Link to="/#About" className={`${buttonClass} bg-white/90 text-black hover:bg-white`}>
                    Resume
                </Link>
                <HashLink smooth to="/#About" className={`${buttonClass} bg-white/10 border-white/25 hover:bg-white/20`}>
                    Learn more
                </HashLink>
            </div>
        </div>
    )
}

export default HeroText