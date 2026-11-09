import { useRef } from "react";
import backgroundPic from "../Assets/bg/city.gif" ;
import { AnimatePresence } from "framer-motion"
import HomeCard from "@/components/HomeCard"
import Window from "@/components/Window"
import Taskbar from "@/components/Taskbar"
import { windowRegistry } from "@/config/windowsRegistry"
import { useWindowManager } from "@/hooks/useWindowManager"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function Desktop(){
     const { openWindows, openWindow, closeWindow, focusWindow } = useWindowManager()
     const isDesktop = useMediaQuery("(min-width: 64rem)")
     const stageRef = useRef(null)
     const sortedWindows = [...openWindows].sort((a, b) => a.z - b.z)
     const visibleWindows = isDesktop ? sortedWindows : sortedWindows.slice(-1)

    return(
        <>
             <div ref={stageRef} className="min-h-dvh w-full relative overflow-x-clip font-Pixel flex justify-start items-center p-3 sm:p-5 pt-[max(0.75rem,env(safe-area-inset-top))] pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] lg:overflow-hidden">
                <img  src={backgroundPic} className='scale-x-[-1] -z-10 absolute top-0 left-0 h-full w-full object-cover' alt="Background Image" />

                <HomeCard onIconClick={openWindow}/>
                <AnimatePresence>
                    {visibleWindows.map((w) => {
                    const entry = windowRegistry.find((r) => r.id === w.id)
                    if (!entry) return null
                    const Content = entry.component
                    return (
                        <Window
                        key={w.id}
                        title={entry.title}
                        z={w.z}
                        isTop={w.id === sortedWindows[sortedWindows.length - 1]?.id}
                        constraintsRef={stageRef}
                        onClose={() => closeWindow(w.id)}
                        onFocus={() => focusWindow(w.id)}
                        >
                        <Content />
                        </Window>
                    )
                    })}
                </AnimatePresence>

                <Taskbar openWindows={openWindows} onFocus={focusWindow} onClose={closeWindow} />
                
            </div>
        </>
    );
}
