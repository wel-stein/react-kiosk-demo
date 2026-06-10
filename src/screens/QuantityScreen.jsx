import KioskFrame from '../components/KioskFrame.jsx'
import { PersonIcon, ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../components/Icons.jsx'
import { formatRM } from '../data/destinations.js'

const MAX_TICKETS = 10

export default function QuantityScreen({
  destination,
  quantity,
  setQuantity,
  onConfirm,
  onBack,
  onCancel,
}) {
  const unitPrice = destination?.price ?? 0
  const total = unitPrice * quantity

  return (
    <KioskFrame theme="teal">
      <h1 className="title title--on-teal">Select Number of Tickets</h1>

      <div className="qty-layout">
        <div className="qty-card">
          <div className="qty-card__header">
            <span className="qty-card__avatar">
              <PersonIcon />
            </span>
            <div>
              <div className="qty-card__type">Adult</div>
              <div className="qty-card__sub">Standard Ticket</div>
            </div>
            <div className="qty-card__price">
              <strong>{formatRM(unitPrice)}</strong>
              <span>Per Person</span>
            </div>
          </div>
          <div className="stepper">
            <button
              className="stepper__btn stepper__btn--minus"
              disabled={quantity <= 1}
              onClick={() => setQuantity(quantity - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="stepper__value" aria-live="polite">{quantity}</span>
            <button
              className="stepper__btn stepper__btn--plus"
              disabled={quantity >= MAX_TICKETS}
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div className="summary-stack">
          <div className="summary-card">
            <div className="summary-card__title">Order Summary</div>
            <div className="summary-row">
              <span>Destination</span>
              <span>{destination?.name}</span>
            </div>
            <div className="summary-row">
              <span>Unit Price</span>
              <span>{formatRM(unitPrice)}</span>
            </div>
            <div className="summary-row">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <strong>{formatRM(total)}</strong>
            </div>
            <button className="btn btn--primary btn--block" onClick={onConfirm}>
              Confirm Purchase <ArrowRightIcon />
            </button>
          </div>
        </div>
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
