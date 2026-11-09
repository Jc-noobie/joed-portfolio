import {portfolioData} from "@/data/portfolio.js"
import { windowRegistry } from "@/config/windowsRegistry"
import Icon from '@/components/Icon' 

export default function HomeCard( {onIconClick} ) {
    return (
    
        <div  className="w-full max-w-120 mx-auto lg:mx-0 border-2 rounded-lg border-white bg-[#535FAB]">
            <div className="w-full px-2 py-2 border-b-2 text-white border-b-white">Home</div>

            <div className="w-full text-white flex flex-col p-2 pt-4 gap-3 items-center">
                <div className="w-full flex justify-center"> <h2 className="text-center leading-none text-[clamp(1.75rem,6vw,3.5rem)]">Hi! Im <span className='text-black underline'>{portfolioData.hero.name}</span>  </h2></div>
                <div className="w-full"><p className='text-sm font-light text-center'>{portfolioData.hero.tagline}</p></div>
                
                <div className="w-full grid grid-cols-4 gap-2 sm:flex sm:justify-center sm:items-center ">
                        {windowRegistry.map((entry) => (
                            <Icon key={entry.id} icon={entry.icon} label={entry.label} onClick={() => onIconClick(entry.id)}></Icon>
                        ))}
                </div>  
            </div>
        </div>
    
    )
}

