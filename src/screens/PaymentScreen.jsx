import KioskFrame from '../components/KioskFrame.jsx'
import { CashIcon, CardIcon, QrIcon, PhoneIcon, ArrowLeftIcon, CloseIcon } from '../components/Icons.jsx'

const methods = [
  { id: 'cash', name: 'Cash', desc: 'Insert notes or coins', Icon: CashIcon },
  { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, MyDebit', Icon: CardIcon },
  { id: 'duitnow', name: 'DuitNow QR', desc: 'Scan with your banking app', Icon: QrIcon },
  { id: 'e-wallet', name: 'E-Wallet', desc: "Touch 'n Go eWallet, GrabPay", Icon: PhoneIcon },
]

export default function PaymentScreen({ onSelect, onBack, onCancel }) {
  return (
    <KioskFrame theme="teal">
      <h1 className="title title--on-teal">Select Mode of Payment</h1>

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
