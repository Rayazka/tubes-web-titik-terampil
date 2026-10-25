const OPSI_JAWABAN = [
  { kode: 'A', teks: 'Peningkatan terjadi secara bertahap.', benar: true },
  { kode: 'B', teks: 'Penurunan hanya terjadi di awal.' },
  { kode: 'C', teks: 'Data tidak menunjukkan pola.' },
  { kode: 'D', teks: 'Peningkatan hanya terjadi di akhir.' },
]

function HeroCopy() {
  return (
    <div className="hero__copy">
      <p className="eyebrow">
        <span className="eyebrow__dot" aria-hidden="true" />
        Bimbel &amp; Try Out Titik Terampil
      </p>
      <h1 className="hero__title">
        <span className="hero__line">Dari satu titik,</span>
        <span className="hero__line">
          tumbuh jadi <span className="hero__highlight">terampil</span>.
        </span>
      </h1>
      <p className="hero__lead">
        Try out UTBK SNBT dan TKA berbasis CBT, lengkap dengan analisis hasil dan
        pembahasan yang terarah.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#katalog">
          Lihat Katalog Try Out <span aria-hidden="true">→</span>
        </a>
        <a className="button button--secondary" href="#cara-kerja">
          Pelajari Cara Kerja
        </a>
      </div>
    </div>
  )
}

function CbtPreview() {
  return (
    <div className="cbt" aria-hidden="true">
      <div className="cbt__topbar">
        <span className="cbt__label">
          <span className="cbt__live" /> Pratinjau simulasi
        </span>
        <span className="cbt__timer">01:24:09</span>
      </div>
      <div className="cbt__meta">
        <span>Penalaran Umum · Soal 12</span>
        <span>18 / 155</span>
      </div>
      <p className="cbt__question">
        Berdasarkan teks, simpulan yang paling tepat adalah ...
      </p>
      <ul className="cbt__options">
        {OPSI_JAWABAN.map((opsi) => (
          <li className={`cbt__option ${opsi.benar ? 'cbt__option--aktif' : ''}`} key={opsi.kode}>
            <span className="cbt__option-code">{opsi.kode}</span>
            <span>{opsi.teks}</span>
          </li>
        ))}
      </ul>
      <div className="cbt__progress">
        <span />
      </div>
    </div>
  )
}

function Hero({ jumlahPaket }) {
  return (
    <section id="beranda" className="hero">
      <div className="container hero__layout">
        <HeroCopy />
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />
          <CbtPreview />
          <div className="hero__float hero__float--score">
            <span className="hero__float-kicker">Contoh hasil</span>
            <span className="hero__float-score">
              742<small>/1000</small>
            </span>
            <span className="hero__float-delta">+38 poin</span>
          </div>
          <div className="hero__float hero__float--packages">
            <span className="hero__float-value">{jumlahPaket}</span>
            <span className="hero__float-label">paket try out siap dipilih</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
