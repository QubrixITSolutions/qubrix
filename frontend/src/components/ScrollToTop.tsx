import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets window scroll to top whenever the pathname changes.
// Prevents landing mid/at bottom when navigating from long pages.
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    // If we're navigating back to portfolio with a target project, skip forced top scroll.
    try {
      if (sessionStorage.getItem('scrollToProject')) return
    } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default ScrollToTop
