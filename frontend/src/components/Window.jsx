import { useEffect, useId, useRef } from "react"
import { motion, useDragControls, useReducedMotion } from "framer-motion"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function Window({ title, z, isTop, onClose, onFocus, constraintsRef, children }) {
  const isDesktop = useMediaQuery("(min-width: 64rem)")
  const reduceMotion = useReducedMotion()
  const dragControls = useDragControls()
  const titleId = useId()
  const dialogRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    dialogRef.current?.focus()
    return () => {
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [])

  useEffect(() => {
    if (!isTop) return
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isTop, onClose])

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-labelledby={titleId}
      tabIndex={-1}
      drag={isDesktop}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      onMouseDown={onFocus}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
      style={{ zIndex: z }}
      className="fixed inset-x-2 top-[max(0.5rem,env(safe-area-inset-top))] bottom-[calc(4.75rem+env(safe-area-inset-bottom))] w-auto min-w-0 max-h-none overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-white rounded-lg border-2 border-white bg-[#535FAB]/80 backdrop-blur-sm shadow-xl outline-none lg:absolute lg:inset-auto lg:top-20 lg:min-w-[300px] lg:max-w-[calc(100vw-2.5rem)] lg:max-h-[min(400px,calc(100dvh-8rem))]"
    >
      <div
        onPointerDown={(event) => {
          if (isDesktop) dragControls.start(event)
        }}
        className="sticky top-0 z-10 flex justify-between items-center px-3 py-2 border-b-2 border-white bg-[#535FAB]/95 backdrop-blur-sm text-white text-xs cursor-grab active:cursor-grabbing"
      >
        <span id={titleId}>{title}</span>
        <button
          type="button"
          onClick={onClose}
          className="group -m-2 flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
          aria-label={`Close ${title}`}
        >
          <span className="block h-3 w-3 rounded-full border border-white/50 group-hover:border-white" />
        </button>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </motion.div>
  )
}
