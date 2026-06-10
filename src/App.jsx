import { useState } from 'react'
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import DestinationScreen from './screens/DestinationScreen.jsx'
import QuantityScreen from './screens/QuantityScreen.jsx'
import PaymentScreen from './screens/PaymentScreen.jsx'
import SuccessScreen from './screens/SuccessScreen.jsx'

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

  switch (screen) {
    case 'destinations':
      return (
        <DestinationScreen
          onSelect={(dest) => {
            setDestination(dest)
            setScreen('quantity')
          }}
          onBack={() => setScreen('welcome')}
          onCancel={reset}
        />
      )
    case 'quantity':
      return (
        <QuantityScreen
          destination={destination}
          quantity={quantity}
          setQuantity={setQuantity}
          onConfirm={() => setScreen('payment')}
          onBack={() => setScreen('destinations')}
        />
      )
    case 'payment':
      return (
        <PaymentScreen
          onSelect={(method) => {
            setPaymentMethod(method)
            setScreen('success')
          }}
          onBack={() => setScreen('quantity')}
          onCancel={reset}
        />
      )
    case 'success':
      return (
        <SuccessScreen
          destination={destination}
          quantity={quantity}
          paymentMethod={paymentMethod}
          onHome={reset}
        />
      )
    default:
      return <WelcomeScreen onPurchaseTicket={() => setScreen('destinations')} />
  }
}
