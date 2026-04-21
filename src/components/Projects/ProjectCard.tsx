import { FaCalendar, FaLock } from 'react-icons/fa'
import BorderGlow from '../BorderGlow/BorderGlow'
import { Link } from 'react-router'

type Props = {
    project: {
        id: number
        name: string
        date: string
        tags: string[]
        description: string
        website: string
        github: string
        thumbnail: string
        isLocked: boolean
    }
}

const buttonClass = "font-mono p-2 rounded-sm px-[12px] py-[8px] border duration-300 transition-all"

const CardContents = ({
    project
}: Props) => {
    const { name, date, tags, description, website, github, thumbnail, isLocked } = project

    return (
        <div className='flex flex-col gap-6 p-6'>
            {
                isLocked ?
                <FaLock size={32} className='bg-white/25 p-2 rounded-full mb-4'/> :
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    width="100%"
                    height="100%"
                />
            }
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-mono'>{name}</h3>
                {
                    !isLocked &&
                    <span className='flex gap-1 items-center text-white/65'>
                        <FaCalendar size={12}/>
                        {date}
                    </span>
                }
                <div className='flex flex-wrap gap-1'>
                    {
                        tags.map((tag) => (
                            <span className='bg-white/25 px-2.5 py-0.5 rounded-full'>
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <p className='text-white/75'>{description}</p>
            </div>
            <div className='flex gap-4'>
                <Link
                    to={website}
                    className={`${buttonClass} text-black ${!isLocked ? "bg-white/90 hover:bg-white" : "bg-white/75 cursor-default"}`}
                >
                    Website
                </Link>
                <Link 
                    to={github}
                    className={`${buttonClass} bg-white/5 border-white/25 ${!isLocked ? "hover:bg-white/15" : "cursor-default"}`}
                >
                    GitHub
                </Link>
            </div>
        </div>
    )
}

const ProjectCard = ({
    project
}: Props) => {
    return (
        <div className='w-[300px]'>
            {
                project.isLocked ?
                <div className='border border-white/25 rounded-xl bg-white/12'>
                    <CardContents project={project}/>
                </div> :
                <BorderGlow
                    edgeSensitivity={100}
                    glowColor="120 80 80"
                    backgroundColor="#0E1610"
                    borderRadius={20}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#D0FFDA', '#5BFFC6', '#00FF35']}
                >
                    <CardContents project={project}/>
                </BorderGlow>
            }
        </div>
    )
}

export default ProjectCard