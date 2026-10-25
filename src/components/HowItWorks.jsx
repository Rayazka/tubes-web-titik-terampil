const LANGKAH = [
  {
    nomor: '01',
    judul: 'Pilih try out',
    deskripsi: 'Filter katalog sesuai target UTBK atau TKA yang ingin kamu latih.',
  },
  {
    nomor: '02',
    judul: 'Kerjakan simulasi',
    deskripsi: 'Ikuti alur CBT dengan timer dan navigasi soal seperti ujian sebenarnya.',
  },
  {
    nomor: '03',
    judul: 'Evaluasi hasil',
    deskripsi:
      'Baca ringkasan hasil, temukan materi prioritas, lalu susun langkah belajar berikutnya.',
  },
]

function HowItWorks() {
  return (
    <section id="cara-kerja" className="section how">
      <div className="container how__layout">
        <div className="how__intro">
          <h2>Tiga langkah, satu arah yang lebih jelas.</h2>
          <p>
            Mulai dari latihan, pahami hasilnya, lalu tentukan materi yang perlu kamu
            kejar berikutnya.
          </p>
          <figure className="how__figure">
            <img
              src="/images/belajar-bersama.jpg"
              alt="Siswa belajar bersama dan mendiskusikan materi"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Belajar bersama, tumbuh bersama.</figcaption>
          </figure>
        </div>
        <ol className="how__steps">
          {LANGKAH.map((langkah) => (
            <li className="how__step" key={langkah.nomor}>
              <span className="how__step-number">{langkah.nomor}</span>
              <div>
                <h3>{langkah.judul}</h3>
                <p>{langkah.deskripsi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
