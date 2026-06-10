import { useMemo } from 'react'
import KioskFrame from '../components/KioskFrame.jsx'
import ConfettiBurst from '../components/ConfettiBurst.jsx'
import { CheckIcon, TrainIcon, PinIcon, InfoIcon, PrinterIcon, HomeIcon } from '../components/Icons.jsx'
import { formatRM } from '../data/destinations.js'

// Decorative pseudo-QR graphic for the demo ticket
function FakeQr({ size = 200, seed = 7 }) {
  const cells = 21
  const cell = size / cells
  const squares = []
  let n = seed
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      const inFinder =
        (x < 7 && y < 7) || (x >= cells - 7 && y < 7) || (x < 7 && y >= cells - 7)
      if (inFinder) continue
      n = (n * 1103515245 + 12345) % 2147483648
      if (n % 5 < 2) {
        squares.push(<rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} />)
      }
    }
  }
  const finder = (fx, fy) => (
    <g key={`f${fx}${fy}`}>
      <rect x={fx * cell} y={fy * cell} width={cell * 7} height={cell * 7} fill="none" stroke="#191c1d" strokeWidth={cell} />
      <rect x={(fx + 2) * cell} y={(fy + 2) * cell} width={cell * 3} height={cell * 3} />
    </g>
  )
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="#191c1d">
      {finder(0.5, 0.5)}
      {finder(cells - 7.5, 0.5)}
      {finder(0.5, cells - 7.5)}
      {squares}
    </svg>
  )
}

export default function SuccessScreen({ destination, quantity, paymentMethod, onHome }) {
  const ticketId = useMemo(() => {
    const num = Math.floor(10000 + Math.random() * 90000)
    const suffix = (destination?.name ?? 'TKT').replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase()
    return `ML-${num}-${suffix}`
  }, [destination])

  const total = (destination?.price ?? 0) * quantity
  // Vary the demo QR per ticket so it doesn't look like a static image
  const qrSeed = useMemo(
    () => [...ticketId].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) % 9973, 7),
    [ticketId],
  )

  return (
    <KioskFrame theme="light">
      <ConfettiBurst />
      <div className="success-hero">
        <span className="success-hero__icon">
          <CheckIcon />
        </span>
        <h1>Payment Successful</h1>
        <p>Your transaction was completed successfully{paymentMethod ? ` via ${paymentMethod}` : ''}.</p>
      </div>

      <div className="success-layout">
        <div className="ticket-card">
          <div className="ticket-card__title">Ticket Summary</div>

          <div className="ticket-field">
            <div>
              <span className="ticket-field__label">From</span>
              <span className="ticket-field__value">JB Sentral (CIQ)</span>
            </div>
            <span className="ticket-field__icon">
              <TrainIcon size={22} />
            </span>
          </div>

          <div className="ticket-field">
            <div>
              <span className="ticket-field__label">Destination</span>
              <span className="ticket-field__value">{destination?.name}</span>
            </div>
            <span className="ticket-field__icon">
              <PinIcon size={22} />
            </span>
          </div>

          <div className="ticket-total">
            <div>
              <span className="ticket-field__label">Quantity</span>
              <span className="ticket-field__value">
                {quantity} Adult Ticket{quantity > 1 ? 's' : ''}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="ticket-field__label">Total Paid</span>
              <span className="ticket-total__amount">{formatRM(total)}</span>
            </div>
          </div>

          <div className="ticket-note">
            <InfoIcon />
            <span>
              Scan this QR code at the gantry or print your ticket below.
              {quantity > 1 ? ` One code covers all ${quantity} tickets.` : ''}
            </span>
          </div>
        </div>

        <div className="qr-panel">
          <div className="qr-panel__frame">
            <div className="qr-panel__code">
              <FakeQr seed={qrSeed} />
            </div>
            <span className="qr-panel__id">TICKET ID: {ticketId}</span>
          </div>
          <button className="btn btn--primary btn--block" onClick={() => window.print()}>
            <PrinterIcon /> Print Ticket
          </button>
          <button className="btn btn--outline btn--block" onClick={onHome}>
            <HomeIcon /> Return to Home
          </button>
        </div>
      </div>
    </KioskFrame>
  )
}
