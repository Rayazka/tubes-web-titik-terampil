import Brand from './Brand'

const TAUTAN_NAVIGASI = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Katalog', href: '#katalog' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Brand tone="light" />
          <p>
            Ruang latihan untuk memetakan kemampuan, merapikan strategi, dan
            melangkah lebih siap.
          </p>
        </div>
        <div className="site-footer__column">
          <h3>Navigasi</h3>
          {TAUTAN_NAVIGASI.map((tautan) => (
            <a href={tautan.href} key={tautan.href}>
              {tautan.label}
            </a>
          ))}
        </div>
        <div className="site-footer__column">
          <h3>Kontak</h3>
          <a href="mailto:halo@titikterampil.id">halo@titikterampil.id</a>
          <a href="tel:+62215550123">+62 21 555 0123</a>
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 Titik Terampil. Seluruh hak cipta dilindungi.</span>
        <span>Dibuat untuk latihan React.</span>
      </div>
    </footer>
  )
}

export default Footer
