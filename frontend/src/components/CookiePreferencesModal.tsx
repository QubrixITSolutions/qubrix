import React, { useState } from 'react'
import { useCookieConsent } from '../context/CookieConsentContext'

const ToggleRow: React.FC<{ label: string; desc: string; value: boolean; onChange?: (v: boolean) => void; required?: boolean }> = ({ label, desc, value, onChange, required }) => {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-200 last:border-none">
      <div className="flex-1">
        <div className="font-semibold text-gray-900 text-sm flex items-center gap-2">{label} {required && <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-900 text-white">Required</span>}</div>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" checked={value} disabled={required} onChange={e => onChange?.(e.target.checked)} />
          <span className={`w-11 h-6 flex items-center rounded-full px-1 transition ${value ? 'bg-primary-600' : 'bg-gray-300'} ${required ? 'opacity-60 cursor-not-allowed' : ''}`}>
            <span className={`bg-white w-4 h-4 rounded-full shadow transform transition ${value ? 'translate-x-5' : ''}`} />
          </span>
        </label>
      </div>
    </div>
  )
}

const CookiePreferencesModal: React.FC = () => {
  const { isPreferencesOpen, closePreferences, preferences, updatePreferences } = useCookieConsent()
  const [temp, setTemp] = useState(preferences)

  React.useEffect(() => { if (isPreferencesOpen) setTemp(preferences) }, [isPreferencesOpen, preferences])

  if (!isPreferencesOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-pref-title">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closePreferences} />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/10 p-6 md:p-8 overflow-hidden">
        <div className="absolute -top-24 -right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <h2 id="cookie-pref-title" className="text-xl font-bold mb-2">Cookie Preferences</h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">Select which categories of cookies you consent to. You can update these at any time from our Cookie Policy page.</p>
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          <div className="bg-white px-5">
            <ToggleRow label="Essential" desc="Required for core site functionality such as security, network management and accessibility." value={true} required />
            <ToggleRow label="Functional" desc="Enable enhanced functionality & personalization (e.g. remembering preferences)." value={temp.functional} onChange={v => setTemp(p => ({ ...p, functional: v }))} />
            <ToggleRow label="Analytics" desc="Help us understand site performance and improve user experience via aggregated insights." value={temp.analytics} onChange={v => setTemp(p => ({ ...p, analytics: v }))} />
            <ToggleRow label="Marketing" desc="Used to deliver relevant ads or communications across channels and measure effectiveness." value={temp.marketing} onChange={v => setTemp(p => ({ ...p, marketing: v }))} />
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
          <button onClick={closePreferences} className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400">Cancel</button>
          <button
            onClick={() => { updatePreferences(temp); closePreferences() }}
            className="px-6 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-sm font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-primary-400"
          >Save Preferences</button>
        </div>
      </div>
    </div>
  )
}

export default CookiePreferencesModal
