import { useState } from 'react'
import KioskFrame from '../components/KioskFrame.jsx'
import { CardIcon, CardPlusIcon, SearchIcon, BusIcon } from '../components/Icons.jsx'

const services = [
  { id: 'topup', label: 'Top-Up\nManjaLink Card', Icon: CardIcon },
  { id: 'purchase-card', label: 'Purchase\nManjaLink Card', Icon: CardPlusIcon },
  { id: 'redeem', label: 'Redeem Rebate /\nCheck Balance', Icon: SearchIcon },
  { id: 'buy-ticket', label: 'Purchase Single Journey\nBus Ticket', Icon: BusIcon },
]

export default function WelcomeScreen({ onPurchaseTicket }) {
  const [unavailable, setUnavailable] = useState(null)

  return (
    <KioskFrame theme="teal">
      <h1 className="title title--on-teal">Please Choose Your Service</h1>
      <div className="service-grid">
        {services.map(({ id, label, Icon }) => (
          <button
            key={id}
            className="service-card"
            onClick={
              id === 'buy-ticket'
                ? onPurchaseTicket
                : () => setUnavailable(label.replace('\n', ' '))
            }
          >
            <span className="service-card__icon">
              <Icon size={56} />
            </span>
            <span className="service-card__label">
              {label.split('\n').map((line) => (
                <span key={line} style={{ display: 'block' }}>{line}</span>
              ))}
            </span>
          </button>
        ))}
      </div>

      {unavailable && (
        <div
          className="overlay"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="unavailable-title"
        >
          <div className="dialog">
            <h2 id="unavailable-title">Service Unavailable</h2>
            <p>
              {unavailable} is not available at this kiosk yet. Please visit the
              ticketing counter for assistance.
            </p>
            <div className="dialog__actions">
              <button className="btn btn--primary btn--pill" onClick={() => setUnavailable(null)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </KioskFrame>
  )
}
