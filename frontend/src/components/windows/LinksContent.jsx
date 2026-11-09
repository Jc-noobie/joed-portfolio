import { portfolioData } from "../../data/portfolio";

export default function LinksContent() {
    return(
        <>
            <div className="flex flex-col pt-[5px] gap-2 overflow-hidden">

                {portfolioData.links.map((some) => (
                    <a key={some.url} target="_blank" rel="noreferrer" href={some.url}>
                        <div className=" flex items-center gap-4 p-3 bg-white border border-white rounded-lg w-full min-h-[56px] py-3 transition-transform [@media(hover:hover)]:hover:-translate-y-0.5">
                            <img src={some.icon} className="w-[30px] h-[30px] shrink-0" alt="" />
                            <h1 className="ml-2 min-w-0 truncate"> {some.label} </h1>
                        </div>
                    </a>
                ))}

            </div>

        </>
    );
}