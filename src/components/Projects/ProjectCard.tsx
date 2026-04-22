import { FaCalendar } from 'react-icons/fa'
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
        thumbnail: string | null
    }
}

const CardContents = ({
    project
}: Props) => {
    const { name, date, tags, description, website, github, thumbnail } = project

    return (
        <div className='flex flex-col gap-6 p-6'>
            <img
                src={thumbnail}
                alt="thumbnail"
                width="100%"
                height="100%"
                className='rounded-lg'
            />
            <div className='flex flex-col gap-3'>
                <h3 className='text-lg font-mono'>{name}</h3>
                <span className='flex gap-1 items-center text-white/65'>
                    <FaCalendar size={12}/>
                    {date}
                </span>
                <div className='flex flex-wrap gap-1'>
                    {
                        tags.map((tag) => (
                            <span key={`${name}_${tag}`} className='bg-white/25 px-2.5 py-0.5 rounded-full'>
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
                    className="btn btn-primary"
                >
                    Website
                </Link>
                <Link 
                    to={github}
                    className="btn btn-ghost"
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
            <BorderGlow
                edgeSensitivity={10}
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
        </div>
    )
}

export default ProjectCard