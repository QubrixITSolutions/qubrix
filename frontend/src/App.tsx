import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ServiceDetails from './pages/ServiceDetails'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import { CookieConsentProvider } from './context/CookieConsentContext'
import CookieConsentBanner from './components/CookieConsentBanner'
import CookiePreferencesModal from './components/CookiePreferencesModal'
import ProjectDetail from './pages/ProjectDetail'
import { useState } from 'react'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const openQuote = () => setIsQuoteModalOpen(true)
  const closeQuote = () => setIsQuoteModalOpen(false)

  return (
    <BrowserRouter>
      <CookieConsentProvider>
        <div className="App">
          <ScrollToTop />
          <Topbar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServiceDetails onOpenQuote={openQuote} />} />
              <Route path="/projects/:slug" element={<ProjectDetail onOpenQuote={openQuote} />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </main>
          <Footer />
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuote} leadSource="global-quote" />
          <CookieConsentBanner />
          <CookiePreferencesModal />
        </div>
      </CookieConsentProvider>
    </BrowserRouter>
  )
}

export default App
