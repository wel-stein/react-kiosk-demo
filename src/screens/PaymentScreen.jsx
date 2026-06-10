import KioskFrame from '../components/KioskFrame.jsx'
import { CashIcon, CardIcon, BankIcon, QrIcon } from '../components/Icons.jsx'

const methods = [
  { id: 'cash', name: 'Cash', desc: 'Insert notes or coins', Icon: CashIcon },
  { id: 'credit-card', name: 'Credit Card', desc: 'Visa, Mastercard, AMEX', Icon: CardIcon },
  { id: 'nets', name: 'Nets', desc: 'Nets FlashPay or Debit', Icon: BankIcon },
  { id: 'e-wallet', name: 'E-Wallet', desc: 'Scan to pay (TNG, GrabPay)', Icon: QrIcon },
]

export default function PaymentScreen({ onSelect, onBack, onCancel }) {
  return (
    <KioskFrame theme="light">
      <h1 className="title title--on-light">Select Mode of Payment</h1>

      <div className="pay-grid">
        {methods.map(({ id, name, desc, Icon }) => (
          <button key={id} className="pay-card" onClick={() => onSelect(name)}>
            <span className="pay-card__icon">
              <Icon size={44} />
            </span>
            <span className="pay-card__name">{name}</span>
            <span className="pay-card__desc">{desc}</span>
          </button>
        ))}
      </div>

      <div className="pay-actions">
        <button className="btn btn--outline" onClick={onBack}>
          Back
        </button>
        <button className="btn btn--danger" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </KioskFrame>
  )
}
