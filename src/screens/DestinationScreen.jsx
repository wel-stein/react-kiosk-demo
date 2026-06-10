import { useState } from 'react'
import KioskFrame from '../components/KioskFrame.jsx'
import { SearchIcon, TrainIcon, ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../components/Icons.jsx'
import { destinations, formatRM } from '../data/destinations.js'

const PAGE_SIZE = 6

export default function DestinationScreen({ onSelect, onBack, onCancel }) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.trim().toLowerCase()),
  )
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount - 1)
  const visible = filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)

  return (
    <KioskFrame theme="teal">
      <h1 className="title title--on-teal">Select Your Destination</h1>

      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search hub or terminal name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(0)
          }}
        />
      </div>

      <div className="dest-grid">
        {visible.map((dest) => (
          <button key={dest.id} className="dest-card" onClick={() => onSelect(dest)}>
            <span className="dest-card__icon">
              <TrainIcon />
            </span>
            <span className="dest-card__name">{dest.name}</span>
            <span className="dest-card__zone">{dest.zone}</span>
            <span className="dest-card__price">{formatRM(dest.price)}</span>
          </button>
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={currentPage === 0}
          onClick={() => setPage(currentPage - 1)}
        >
          <ArrowLeftIcon size={16} /> Previous
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`pagination__page ${i === currentPage ? 'pagination__page--active' : ''}`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="pagination__btn"
          disabled={currentPage >= pageCount - 1}
          onClick={() => setPage(currentPage + 1)}
        >
          Next <ArrowRightIcon size={16} />
        </button>
      </div>

      <div className="action-bar">
        <button className="btn btn--white btn--pill" onClick={onBack}>
          <ArrowLeftIcon /> Back
        </button>
        <button className="btn btn--danger btn--pill" onClick={onCancel}>
          <CloseIcon /> Cancel
        </button>
      </div>
    </KioskFrame>
  )
}
