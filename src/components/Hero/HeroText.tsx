import { Link } from 'react-router';
import TextType from '../TextType/TextType'
import { HashLink } from 'react-router-hash-link';

const HeroText = () => {
    return (
        <div className="z-10 flex flex-col gap-12 mx-6 md:mx-0 md:w-3/4 xl:w-1/2">
            <span className='px-4 py-2 bg-white/10 w-fit rounded-full text-sm'>Portfolio 2026</span>
            <div className='space-y-8 md:space-y-4'>
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
                    className="lg:text-7xl text-6xl font-semibold font-mono tracking-tighter"
                />
                <p>
                    I'm a full-stack engineer with ~4 years of experience building scalable SaaS applications, with a deep fundamental understanding of React and JavaScript.
                    I focus on performance and maintainability, with particular strength in frontend and UI/UX.
                </p>
            </div>
            <div className='flex gap-4'>
                <Link to="https://drive.google.com/file/d/1JjoT2Pc-dFPPemc2l_pdK01Q2NcD1p80/view?usp=sharing" className="btn btn-primary">
                    Resume
                </Link>
                <HashLink smooth to="/#About" className="btn btn-secondary">
                    Learn more
                </HashLink>
            </div>
        </div>
    )
}

export default HeroText