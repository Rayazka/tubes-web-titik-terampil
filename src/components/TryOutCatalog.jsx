import { KATEGORI_TRYOUT } from '../data/tryOutData'
import TryOutCard from './TryOutCard'
import TryOutForm from './TryOutForm'
import EmptyState from './EmptyState'

const FILTER_KATALOG = ['Semua', ...KATEGORI_TRYOUT]

function CatalogFilters({ kategoriAktif, onGanti }) {
  return (
    <div className="catalog__filters" role="group" aria-label="Filter kategori try out">
      {FILTER_KATALOG.map((kategori) => (
        <button
          type="button"
          className={`filter-chip ${kategoriAktif === kategori ? 'filter-chip--aktif' : ''}`}
          aria-pressed={kategoriAktif === kategori}
          onClick={() => onGanti(kategori)}
          key={kategori}
        >
          {kategori}
        </button>
      ))}
    </div>
  )
}

function CatalogContent({ tryOuts, totalTryOut, aksi }) {
  if (tryOuts.length === 0) {
    const kosongTotal = totalTryOut === 0
    return (
      <EmptyState
        judul={kosongTotal ? 'Belum ada data try out' : 'Kategori ini belum punya paket'}
        deskripsi={
          kosongTotal
            ? 'Tambahkan paket try out pertama lewat panel pengelola.'
            : 'Coba pilih kategori lain atau tampilkan semua paket.'
        }
        aksiLabel={kosongTotal ? undefined : 'Tampilkan semua'}
        onAksi={kosongTotal ? undefined : () => aksi.gantiKategori('Semua')}
      />
    )
  }

  return (
    <div className="catalog__grid">
      {tryOuts.map((tryOut) => (
        <TryOutCard
          tryOut={tryOut}
          onHapus={aksi.hapusTryOut}
          key={tryOut.id}
        />
      ))}
    </div>
  )
}

function TryOutCatalog({ tryOuts, totalTryOut, kategoriAktif, aksi }) {
  return (
    <section id="katalog" className="section catalog">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <h2>Pilih try out yang paling kamu butuhkan.</h2>
            <p>Kelola jadwal try out Titik Terampil, lalu mulai latihan sesuai targetmu.</p>
          </div>
          <span className="catalog__count" aria-live="polite">
            {tryOuts.length === totalTryOut
              ? `${totalTryOut} paket`
              : `${tryOuts.length} dari ${totalTryOut} paket`}
          </span>
        </div>
        <CatalogFilters kategoriAktif={kategoriAktif} onGanti={aksi.gantiKategori} />
        <div className="catalog__main">
          <CatalogContent
            tryOuts={tryOuts}
            totalTryOut={totalTryOut}
            aksi={aksi}
          />
          <aside className="catalog__manager" aria-label="Panel pengelola try out">
            <TryOutForm onTambah={aksi.tambahTryOut} />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default TryOutCatalog
