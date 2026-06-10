import { useState } from 'react'
import { GlobeIcon } from './Icons.jsx'

const LANGUAGES = ['English', 'Bahasa Melayu', '中文']

// Demo-only language selection; survives screen changes without real i18n.
let savedLanguage = LANGUAGES[0]

export default function KioskFrame({ theme = 'teal', children }) {
  const [language, setLanguage] = useState(savedLanguage)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`kiosk kiosk--${theme}`}>
      <header className="header">
        <span className="header__logo">ManjaLink</span>
        <div className="header__lang-wrap">
          <button
            className={`header__lang ${theme === 'teal' ? 'header__lang--pill' : ''}`}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <GlobeIcon />
            {language}
          </button>
          {menuOpen && (
            <div className="lang-menu" role="menu">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  role="menuitemradio"
                  aria-checked={lang === language}
                  onClick={() => {
                    savedLanguage = lang
                    setLanguage(lang)
                    setMenuOpen(false)
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <span>© 2026 ManjaLink. For support, call +60 7-333 2808</span>
        <nav className="footer__links">
          <a href="#help" onClick={(e) => e.preventDefault()}>Help Center</a>
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          <a href="#contact" onClick={(e) => e.preventDefault()}>Contact Support</a>
        </nav>
      </footer>
    </div>
  )
}
