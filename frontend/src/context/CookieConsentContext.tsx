import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'

export type CookieCategory = 'essential' | 'functional' | 'analytics' | 'marketing'

export interface CookiePreferences {
  essential: true; // always true / required
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextValue {
  preferences: CookiePreferences;
  hasSetPreferences: boolean;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  lastUpdated?: string;
  openPreferences: () => void;
  isPreferencesOpen: boolean;
  closePreferences: () => void;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false
}

const STORAGE_KEY = 'cookieConsentPrefs'

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined)

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [hasSetPreferences, setHasSetPreferences] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string | undefined>()
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && parsed.preferences) {
          setPreferences({ ...defaultPreferences, ...parsed.preferences })
          setHasSetPreferences(true)
          setLastUpdated(parsed.lastUpdated)
        }
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const persist = (prefs: CookiePreferences) => {
    try {
      const timestamp = new Date().toISOString()
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ preferences: prefs, lastUpdated: timestamp }))
      setLastUpdated(timestamp)
    } catch (_) {
      // ignore persistence errors
    }
  }

  const updatePreferences = useCallback((prefs: Partial<CookiePreferences>) => {
    setPreferences(prev => {
      const next: CookiePreferences = { ...prev, ...prefs, essential: true }
      persist(next)
      return next
    })
    setHasSetPreferences(true)
  }, [])

  const acceptAll = useCallback(() => {
    updatePreferences({ functional: true, analytics: true, marketing: true })
  }, [updatePreferences])

  const rejectNonEssential = useCallback(() => {
    updatePreferences({ functional: false, analytics: false, marketing: false })
  }, [updatePreferences])

  const openPreferences = () => setIsPreferencesOpen(true)
  const closePreferences = () => setIsPreferencesOpen(false)

  const value: CookieConsentContextValue = {
    preferences,
    hasSetPreferences,
    updatePreferences,
    acceptAll,
    rejectNonEssential,
    lastUpdated,
    openPreferences,
    isPreferencesOpen,
    closePreferences
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}
