import ProjectCard from './ProjectCard'
import { FaLock } from 'react-icons/fa'
import ecomDashboardThumbnail from "../../assets/ecom-dashboard-thumbnail.png"
import carlyAiThumbnail from "../../assets/carly-ai-thumbnail.png"
import { Link } from 'react-router'
import SpotlightCard from '../SpotlightCard/SpotlightCard'

// REPLACE WITH GITHUB API AND RETRIEVE LAST THREE PROJECTS
const projects = [
    {
        id: 1,
        name: "E-commerce Dashboard",
        date: "March 2026",
        tags: ["fullstack", "performance"],
        description: "An interactive e-commerce dashboard built with Next.js, and React Query.",
        website: "https://aesthetic-phoenix-0027ae.netlify.app/",
        github: "https://github.com/aakirahin/ecom-dashboard",
        thumbnail: ecomDashboardThumbnail,
    },
    {
        id: 2,
        name: "Carly AI",
        date: "April 2026",
        tags: ["frontend", "ui/ux"],
        description: "A lightweight chat UI built with React, TypeScript, and Vite.",
        website: "https://carly-ai.netlify.app/",
        github: "https://github.com/aakirahin/carly-ai",
        thumbnail: carlyAiThumbnail,
    },
]

const ProjectsList = () => {
  return (
    <div className='lg:w-2/3 flex flex-wrap gap-[32px] justify-center'>
        {
            projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project}
                />
            ))
        }
        <SpotlightCard 
            className="w-[300px] flex flex-col justify-center items-center gap-8"
            spotlightColor="rgba(0, 255, 53, 0.2)"
        >
            <FaLock size={48} className='bg-white/15 p-4 rounded-full'/>
            <div className='text-center space-y-1'>
                <h3 className='text-lg font-mono'>More projects coming...</h3>
                <p className='text-white/75'>Some exciting stuff in the works!</p>
            </div>
            <Link 
                to="https://github.com/aakirahin"
                className="btn btn-secondary w-fit"
            >
                Check out my GitHub
            </Link>
        </SpotlightCard>
    </div>
  )
}

export default ProjectsList