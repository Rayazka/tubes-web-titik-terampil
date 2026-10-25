import { useState } from 'react'
import Brand from './Brand'

const MENU_UTAMA = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Katalog', href: '#katalog' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
]

function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false)
  const tutupMenu = () => setMenuTerbuka(false)

  return (
    <header className="site-header">
      <div className="container navbar">
        <Brand />
        <nav
          id="menu-utama"
          className={`navbar__nav ${menuTerbuka ? 'navbar__nav--open' : ''}`}
          aria-label="Navigasi utama"
        >
          {MENU_UTAMA.map((menu) => (
            <a className="navbar__link" href={menu.href} key={menu.href} onClick={tutupMenu}>
              {menu.label}
            </a>
          ))}
          <a className="button button--primary navbar__cta" href="#katalog" onClick={tutupMenu}>
            Mulai Try Out
          </a>
        </nav>
        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuTerbuka}
          aria-controls="menu-utama"
          onClick={() => setMenuTerbuka((sebelumnya) => !sebelumnya)}
        >
          <span className="sr-only">{menuTerbuka ? 'Tutup menu' : 'Buka menu'}</span>
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
