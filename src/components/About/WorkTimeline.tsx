const experience = [
    {
        title: "Software Developer",
        company: "VSNi",
        period: "June 2022 - November 2025",
    },
    {
        title: "Coding Tutor",
        company: "CodeCamp",
        period: "April 2022 - May 2022",
    },
    {
        title: "Mathematics Tutor",
        company: "Fine Tutors",
        period: "November 2021 - May 2022",
    },
    {
        title: "Coding Bootcamp Student",
        company: "Northcoders",
        period: "October 2021 - February 2022",
    },
]

const WorkTimeline = () => {
    return (
        <div className="relative lg:w-1/2 lg:pl-18">
            <div className="absolute bottom-0 lg:left-18 top-0 w-px bg-white/25" />
            <ul className="space-y-8 text-left">
                {
                    experience.map((item) => (
                        <li key={item.title} className="relative pl-16 py-4">
                            <span className="absolute left-0 top-8 block -translate-x-1/2">
                                <span className="absolute inset-0 h-4 w-4 rounded-full bg-white/50 animate-ping" />
                                <span className="relative block h-4 w-4 rounded-full border border-white" />
                                <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </span>

                            <span className="absolute left-2 top-9.5 block w-10 border-t border-dashed border-white/50" />

                            <h3 className="font-mono text-white text-lg">
                                {item.title}
                            </h3>
                            <p className="mt-1">{item.company}</p>
                            <p className="mt-1 text-white/65">{item.period}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WorkTimeline
