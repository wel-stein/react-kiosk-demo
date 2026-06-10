import { GlobeIcon } from './Icons.jsx'

export default function KioskFrame({ theme = 'teal', children }) {
  return (
    <div className={`kiosk kiosk--${theme}`}>
      <header className="header">
        <span className="header__logo">ManjaLink</span>
        <button className={`header__lang ${theme === 'teal' ? 'header__lang--pill' : ''}`}>
          <GlobeIcon />
          English
        </button>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <span>2024 ManjaLink. For support, call +60 7-333 2808</span>
        <nav className="footer__links">
          <a href="#help" onClick={(e) => e.preventDefault()}>Help Center</a>
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          <a href="#contact" onClick={(e) => e.preventDefault()}>Contact Support</a>
        </nav>
      </footer>
    </div>
  )
}
