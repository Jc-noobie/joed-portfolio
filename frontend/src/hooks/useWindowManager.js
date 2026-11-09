import { useState, useCallback } from "react"

export function useWindowManager() {
  
  const [openWindows, setOpenWindows] = useState([])
  const [topZ, setTopZ] = useState(10)

  const isOpen = useCallback(
    (id) => openWindows.some((w) => w.id === id),
    [openWindows]
  )

  const openWindow = useCallback((id) => {
    setOpenWindows((prev) => {
      if (prev.some((w) => w.id === id)) return prev 
      return [...prev, { id, z: topZ + 1 }]
    })
    setTopZ((z) => z + 1)
  }, [topZ])

  const closeWindow = useCallback((id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const focusWindow = useCallback((id) => {
    setTopZ((z) => {
      const nz = z + 1
      setOpenWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, z: nz } : w))
      )
      return nz
    })
  }, [])

  return { openWindows, isOpen, openWindow, closeWindow, focusWindow }
}