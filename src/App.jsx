import { useState } from 'react'
import { dataAwalTryOut } from './data/tryOutData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSummary from './components/StatsSummary'
import FeatureGrid from './components/FeatureGrid'
import TryOutCatalog from './components/TryOutCatalog'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import './App.css'

function filterTryOut(daftarTryOut, kategoriAktif) {
  if (kategoriAktif === 'Semua') {
    return daftarTryOut
  }
  return daftarTryOut.filter((tryOut) => tryOut.kategori === kategoriAktif)
}

function App() {
  const [daftarTryOut, setDaftarTryOut] = useState(dataAwalTryOut)
  const [kategoriAktif, setKategoriAktif] = useState('Semua')

  const tambahTryOut = (tryOutBaru) => {
    setDaftarTryOut((daftar) => [
      { ...tryOutBaru, id: crypto.randomUUID() },
      ...daftar,
    ])
    setKategoriAktif('Semua')
  }

  const hapusTryOut = (id, nama) => {
    if (!window.confirm(`Hapus "${nama}" dari katalog?`)) {
      return
    }
    setDaftarTryOut((daftar) => daftar.filter((tryOut) => tryOut.id !== id))
  }

  const tryOutTampil = filterTryOut(daftarTryOut, kategoriAktif)
  const aksiKatalog = {
    gantiKategori: setKategoriAktif,
    tambahTryOut,
    hapusTryOut,
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero jumlahPaket={daftarTryOut.length} />
        <StatsSummary tryOuts={daftarTryOut} />
        <FeatureGrid />
        <TryOutCatalog
          tryOuts={tryOutTampil}
          totalTryOut={daftarTryOut.length}
          kategoriAktif={kategoriAktif}
          aksi={aksiKatalog}
        />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App
