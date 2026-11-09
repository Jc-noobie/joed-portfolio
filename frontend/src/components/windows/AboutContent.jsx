import profile300 from "../../Assets/profile-300.png"
import profile600 from "../../Assets/profile-600.png"

export default function AboutContent() {
    return(

        <>
        <div className="flex flex-col sm:flex-row gap-4 w-full min-w-0 ">
            <img src={profile300} srcSet={`${profile300} 300w, ${profile600} 600w`} sizes="(min-width: 640px) 300px, 100vw" width="300" height="300" loading="lazy" decoding="async" alt="Profile Picture" draggable='false' className="rounded-lg w-full max-w-[300px] aspect-square object-cover" />        
            <div className="flex flex-col mb-5 leading-tight text-white min-w-0 break-words text-sm sm:text-base">
            <h1>Joed @ Donaire</h1>
            <h2>- - - - - - - - - - - -</h2>
            <h3><span className="text-[#F3BF93] underline font-bold">OS : </span> Web Developer </h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Host :</span>  4th Year College Student</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Kernel :</span>  React 18 / Node 20</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Uptime :</span>  2 Years and 3 months</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Packages :</span>  5 Projects Shipped</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Shell :</span>  Javascript</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Resolution :</span>  Figma/OpenDesign</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">WM :</span>  Team Leader (4 Devs)</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Theme :</span>  System Design</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Icons :</span>  Tailwind + Shadcn</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Terminal :</span>  Vs code</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">CPU :</span>  React, Node, Express</h3>
            <h3><span className="text-[#F3BF93] underline font-bold ">Memory :</span>  Coffee Level 999/999</h3>    
            </div>

        </div>
        
        
        </>

    );
}