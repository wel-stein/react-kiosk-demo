import { useState } from 'react'
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import DestinationScreen from './screens/DestinationScreen.jsx'
import QuantityScreen from './screens/QuantityScreen.jsx'
import PaymentScreen from './screens/PaymentScreen.jsx'
import SuccessScreen from './screens/SuccessScreen.jsx'
import IdleManager from './components/IdleManager.jsx'

const IDLE_MS = 60_000
const SUCCESS_IDLE_MS = 30_000

export default function App() {
  const [screen, setScreen] = useState('welcome')
  const [destination, setDestination] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const reset = () => {
    setDestination(null)
    setQuantity(1)
    setPaymentMethod(null)
    setScreen('welcome')
  }

  let content
  switch (screen) {
    case 'destinations':
      content = (
        <DestinationScreen
          onSelect={(dest) => {
            setDestination(dest)
            setScreen('quantity')
          }}
          onBack={() => setScreen('welcome')}
          onCancel={reset}
        />
      )
      break
    case 'quantity':
      content = (
        <QuantityScreen
          destination={destination}
          quantity={quantity}
          setQuantity={setQuantity}
          onConfirm={() => setScreen('payment')}
          onBack={() => setScreen('destinations')}
          onCancel={reset}
        />
      )
      break
    case 'payment':
      content = (
        <PaymentScreen
          onSelect={(method) => {
            setPaymentMethod(method)
            setScreen('success')
          }}
          onBack={() => setScreen('quantity')}
          onCancel={reset}
        />
      )
      break
    case 'success':
      content = (
        <SuccessScreen
          destination={destination}
          quantity={quantity}
          paymentMethod={paymentMethod}
          onHome={reset}
        />
      )
      break
    default:
      content = <WelcomeScreen onPurchaseTicket={() => setScreen('destinations')} />
  }

  return (
    <>
      {content}
      <IdleManager
        enabled={screen !== 'welcome'}
        idleMs={screen === 'success' ? SUCCESS_IDLE_MS : IDLE_MS}
        onTimeout={reset}
      />
    </>
  )
}
