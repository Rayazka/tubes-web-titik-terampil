function EmptyState({ judul, deskripsi, aksiLabel, onAksi }) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__mark" aria-hidden="true">
        <span />
      </span>
      <h3>{judul}</h3>
      <p>{deskripsi}</p>
      {aksiLabel && onAksi ? (
        <button type="button" className="button button--secondary" onClick={onAksi}>
          {aksiLabel}
        </button>
      ) : null}
    </div>
  )
}

export default EmptyState
