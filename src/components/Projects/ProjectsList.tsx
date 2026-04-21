import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

const projects = [
    {
        id: 1,
        name: "E-commerce Dashboard",
        date: "March 2026",
        tags: ["fullstack", "performance"],
        description: "An interactive e-commerce dashboard built with Next.js, and React Query.",
        website: "https://aesthetic-phoenix-0027ae.netlify.app/",
        github: "https://github.com/aakirahin/ecom-dashboard",
        thumbnail: "",
        isLocked: false
    },
    {
        id: 2,
        name: "Carly AI",
        date: "April 2026",
        tags: ["frontend", "ui/ux"],
        description: "A lightweight chat UI built with React, TypeScript, and Vite.",
        website: "https://carly-ai.netlify.app/",
        github: "https://github.com/aakirahin/carly-ai",
        thumbnail: "",
        isLocked: false
    },
    {
        id: 3,
        name: "Landing Page",
        tags: ["frontend", "ui/ux"],
        date: "Current",
        description: "Interactive landing page to practice using Framer Motion.",
        website: "/",
        github: "/",
        thumbnail: "",
        isLocked: true
    },
    {
        id: 4,
        name: "Job-Hunting Kanban",
        tags: ["fullstack", "devops", "auth"],
        date: "Current",
        description: "Coming soon!",
        website: "/",
        github: "/",
        thumbnail: "",
        isLocked: true
    },
    {
        id: 3,
        name: "Pinterest Clone",
        tags: ["frontend", "performance"],
        date: "Current",
        description: "Coming soon!",
        website: "/",
        github: "/",
        thumbnail: "",
        isLocked: true
    },
]

const ProjectsList = (props: Props) => {
  return (
    <div className='w-2/3 flex flex-wrap gap-[32px] justify-center'>
        {
            projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project}
                />
            ))
        }
    </div>
  )
}

export default ProjectsList