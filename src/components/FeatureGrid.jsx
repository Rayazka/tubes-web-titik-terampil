const FITUR = [
  {
    nomor: '01',
    judul: 'Simulasi CBT',
    deskripsi:
      'Timer, navigasi soal, dan suasana ujian dibuat senyata mungkin agar kamu terbiasa dengan ritme CBT.',
  },
  {
    nomor: '02',
    judul: 'Analisis Hasil',
    deskripsi:
      'Lihat bagian yang sudah kuat dan materi yang perlu diulang setelah setiap try out selesai.',
  },
  {
    nomor: '03',
    judul: 'Pembahasan Terarah',
    deskripsi:
      'Pelajari langkah pengerjaan, bukan hanya jawaban benar, supaya kesalahan tidak terulang.',
  },
]

function FeatureGrid() {
  return (
    <section id="fitur" className="section features">
      <div className="container">
        <div className="section-heading">
          <h2>Belajar bukan cuma soal skor.</h2>
          <p>
            Setiap try out di Titik Terampil dirancang untuk membantumu tahu apa yang
            sudah kuat dan apa yang perlu dikejar berikutnya.
          </p>
        </div>
        <div className="features__grid">
          {FITUR.map((fitur, index) => (
            <article
              className={`feature-card ${index === 0 ? 'feature-card--utama' : ''}`}
              key={fitur.nomor}
            >
              <span className="feature-card__number">{fitur.nomor}</span>
              <h3>{fitur.judul}</h3>
              <p>{fitur.deskripsi}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
