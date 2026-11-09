import { windowRegistry } from "@/config/windowsRegistry"

export default function Taskbar({ openWindows, onFocus, onClose }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 flex gap-2 overflow-x-auto bg-black/40 backdrop-blur-sm border-t border-white/30 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:absolute lg:inset-x-auto lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[calc(100vw-2rem)] lg:flex-wrap lg:justify-center lg:overflow-visible lg:rounded-lg lg:border">
      {openWindows.map((w) => {
        const entry = windowRegistry.find((r) => r.id === w.id)
        if (!entry) return null
        return (
          <div
            key={w.id}
            onClick={() => onFocus(w.id)}
            className="min-h-11 shrink-0 text-white text-xs px-3 py-2 rounded cursor-pointer [@media(hover:hover)]:hover:bg-white/20 active:bg-white/30 flex items-center gap-1"
          >
            <img src={entry.icon} className="w-3 h-3" alt="" />
            {entry.label}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onClose(w.id)
              }}
              className="ml-1 flex h-8 w-8 items-center justify-center rounded opacity-60 [@media(hover:hover)]:hover:opacity-100"
              aria-label={`Close ${entry.label}`}
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}