import { useState } from 'react'
import { KATEGORI_TRYOUT } from '../data/tryOutData'

const NILAI_AWAL = {
  nama: '',
  kategori: '',
  tanggal: '',
  durasi: '',
  jumlahSoal: '',
  kuota: '',
}

const BIDANG_FORM = [
  { nama: 'nama', label: 'Nama try out', tipe: 'text', placeholder: 'Contoh: Try Out UTBK Gelombang 2' },
  { nama: 'kategori', label: 'Kategori', tipe: 'select', options: KATEGORI_TRYOUT },
  { nama: 'tanggal', label: 'Tanggal', tipe: 'date' },
  { nama: 'durasi', label: 'Durasi (menit)', tipe: 'number', min: 1 },
  { nama: 'jumlahSoal', label: 'Jumlah soal', tipe: 'number', min: 1 },
  { nama: 'kuota', label: 'Kuota peserta', tipe: 'number', min: 1 },
]

function validasiForm(nilai) {
  const nama = nilai.nama.trim()
  const durasi = Number(nilai.durasi)
  const jumlahSoal = Number(nilai.jumlahSoal)
  const kuota = Number(nilai.kuota)

  return (
    nama.length >= 3 &&
    Boolean(nilai.kategori) &&
    Boolean(nilai.tanggal) &&
    Number.isInteger(durasi) && durasi > 0 &&
    Number.isInteger(jumlahSoal) && jumlahSoal > 0 &&
    Number.isInteger(kuota) && kuota > 0
  )
}

function FormField({ field, value, onChange }) {
  const id = `tryout-${field.nama}`

  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{field.label}</span>
      {field.tipe === 'select' ? (
        <select
          id={id}
          className="field__input"
          name={field.nama}
          value={value}
          onChange={onChange}
          required
        >
          <option value="">Pilih kategori</option>
          {field.options.map((opsi) => (
            <option value={opsi} key={opsi}>
              {opsi}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className="field__input"
          name={field.nama}
          type={field.tipe}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          min={field.min}
          inputMode={field.tipe === 'number' ? 'numeric' : undefined}
          autoComplete="off"
          required
        />
      )}
    </label>
  )
}

function FormTryOut({ nilai, pesanError, onChange, onSubmit }) {
  return (
    <section className="manager-card" aria-labelledby="judul-panel">
      <div className="manager-card__heading">
        <h3 id="judul-panel">Panel pengelola</h3>
        <p>Tambah paket baru ke katalog. Data langsung tersimpan di state aplikasi.</p>
      </div>
      <form className="manager-form" onSubmit={onSubmit} noValidate>
        <div className="manager-form__grid">
          {BIDANG_FORM.map((field) => (
            <FormField
              field={field}
              value={nilai[field.nama]}
              onChange={onChange}
              key={field.nama}
            />
          ))}
        </div>
        {pesanError ? (
          <p className="form-error" role="alert">
            {pesanError}
          </p>
        ) : null}
        <button type="submit" className="button button--primary manager-form__submit">
          Tambah Try Out
        </button>
        <p className="manager-form__note">
          Paket baru akan muncul di katalog dan ikut dihitung pada ringkasan.
        </p>
      </form>
    </section>
  )
}

function TryOutForm({ onTambah }) {
  const [nilai, setNilai] = useState(NILAI_AWAL)
  const [pesanError, setPesanError] = useState('')

  const ubahField = (event) => {
    const { name, value } = event.target
    setNilai((sebelumnya) => ({ ...sebelumnya, [name]: value }))
    if (pesanError) {
      setPesanError('')
    }
  }

  const kirimForm = (event) => {
    event.preventDefault()
    if (!validasiForm(nilai)) {
      setPesanError('Lengkapi semua data dengan benar sebelum menambah try out.')
      return
    }
    onTambah({
      nama: nilai.nama.trim(),
      kategori: nilai.kategori,
      tanggal: nilai.tanggal,
      durasi: Number(nilai.durasi),
      jumlahSoal: Number(nilai.jumlahSoal),
      kuota: Number(nilai.kuota),
    })
    setNilai(NILAI_AWAL)
    setPesanError('')
  }

  return (
    <FormTryOut
      nilai={nilai}
      pesanError={pesanError}
      onChange={ubahField}
      onSubmit={kirimForm}
    />
  )
}

export default TryOutForm
