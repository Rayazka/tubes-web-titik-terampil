function Brand({ tone = 'dark', href = '#beranda' }) {
  return (
    <a className={`brand brand--${tone}`} href={href} aria-label="Titik Terampil, kembali ke beranda">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="presentation" focusable="false">
          <circle cx="16" cy="16" r="12.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="4.5" fill="currentColor" />
          <path d="M16 2.5v5M16 24.5v5M2.5 16h5M24.5 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brand__text">
        <span className="brand__name">Titik Terampil</span>
        <span className="brand__tagline">Bimbel &amp; Try Out</span>
      </span>
    </a>
  )
}

export default Brand
