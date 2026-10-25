function hitungStatistik(tryOuts) {
  const totalSoal = tryOuts.reduce((total, tryOut) => total + tryOut.jumlahSoal, 0)
  const totalKuota = tryOuts.reduce((total, tryOut) => total + tryOut.kuota, 0)
  const totalDurasi = tryOuts.reduce((total, tryOut) => total + tryOut.durasi, 0)
  const rataDurasi = tryOuts.length ? Math.round(totalDurasi / tryOuts.length) : 0

  return [
    { label: 'Paket try out', nilai: tryOuts.length, satuan: 'paket' },
    { label: 'Soal siap latih', nilai: totalSoal, satuan: 'soal' },
    { label: 'Kuota peserta', nilai: totalKuota, satuan: 'kursi' },
    { label: 'Rata-rata durasi', nilai: rataDurasi, satuan: 'menit' },
  ]
}

function StatsSummary({ tryOuts }) {
  const statistik = hitungStatistik(tryOuts)

  return (
    <section className="stats" aria-label="Ringkasan katalog try out">
      <div className="container stats__grid">
        {statistik.map((item) => (
          <div className="stats__item" key={item.label}>
            <span className="stats__value">
              {item.nilai.toLocaleString('id-ID')}
              <small>{item.satuan}</small>
            </span>
            <span className="stats__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSummary
