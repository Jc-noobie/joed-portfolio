import { portfolioData } from "../../data/portfolio";

export default function ProjectsContent() {
    return(
        <>

            <div className="flex flex-col pt-[5px] gap-2">
                {portfolioData.projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-3 bg-white border border-white rounded-lg w-full min-w-0 transition-transform [@media(hover:hover)]:hover:-translate-y-0.5"
                    >
                        <h1 className="text-[#F3BF93] font-bold break-words">{project.title}</h1>
                        <p className="text-black text-sm mt-1">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 text-xs bg-black text-white rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
