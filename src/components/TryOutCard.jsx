const FORMAT_TANGGAL = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function formatTanggal(tanggal) {
  return FORMAT_TANGGAL.format(new Date(`${tanggal}T00:00:00`))
}

function ambilStatus(tanggal) {
  const hariIni = new Date()
  hariIni.setHours(0, 0, 0, 0)
  return new Date(`${tanggal}T00:00:00`) >= hariIni ? 'Akan datang' : 'Selesai'
}

function TryOutCard({ tryOut, onHapus }) {
  const status = ambilStatus(tryOut.tanggal)

  return (
    <article className="tryout-card" data-kategori={tryOut.kategori}>
      <div className="tryout-card__top">
        <span className={`badge badge--${tryOut.kategori.toLowerCase()}`}>
          {tryOut.kategori}
        </span>
        <span
          className={`tryout-card__status ${
            status === 'Selesai' ? 'tryout-card__status--selesai' : ''
          }`}
        >
          {status}
        </span>
      </div>
      <h3>{tryOut.nama}</h3>
      <dl className="tryout-card__meta">
        <div>
          <dt>Tanggal</dt>
          <dd>{formatTanggal(tryOut.tanggal)}</dd>
        </div>
        <div>
          <dt>Durasi</dt>
          <dd>{tryOut.durasi} menit</dd>
        </div>
        <div>
          <dt>Soal</dt>
          <dd>{tryOut.jumlahSoal} soal</dd>
        </div>
        <div>
          <dt>Kuota</dt>
          <dd>{tryOut.kuota} peserta</dd>
        </div>
      </dl>
      <button
        type="button"
        className="tryout-card__delete"
        aria-label={`Hapus ${tryOut.nama}`}
        onClick={() => onHapus(tryOut.id, tryOut.nama)}
      >
        Hapus
      </button>
    </article>
  )
}

export default TryOutCard
