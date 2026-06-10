import { useEffect, useState } from 'react'

const PROMPT_SECONDS = 15
const ACTIVITY_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'wheel']

// Kiosk idle guard: after `idleMs` without input, ask if the user is still
// there; if the countdown runs out, reset the session.
export default function IdleManager({ enabled, idleMs, onTimeout }) {
  const [prompting, setPrompting] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(PROMPT_SECONDS)

  useEffect(() => {
    if (!enabled || prompting) return undefined
    const arm = () =>
      setTimeout(() => {
        setSecondsLeft(PROMPT_SECONDS)
        setPrompting(true)
      }, idleMs)
    let timer = arm()
    const onActivity = () => {
      clearTimeout(timer)
      timer = arm()
    }
    ACTIVITY_EVENTS.forEach((e) => window.addEventListener(e, onActivity))
    return () => {
      clearTimeout(timer)
      ACTIVITY_EVENTS.forEach((e) => window.removeEventListener(e, onActivity))
    }
  }, [enabled, prompting, idleMs])

  useEffect(() => {
    if (!prompting) return undefined
    if (secondsLeft <= 0) {
      setPrompting(false)
      onTimeout()
      return undefined
    }
    const tick = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(tick)
  }, [prompting, secondsLeft, onTimeout])

  if (!prompting) return null

  return (
    <div className="overlay" role="alertdialog" aria-modal="true" aria-labelledby="idle-title">
      <div className="dialog">
        <h2 id="idle-title">Are you still there?</h2>
        <p>This session will reset automatically in</p>
        <div className="dialog__countdown" aria-live="polite">{secondsLeft}s</div>
        <div className="dialog__actions">
          <button className="btn btn--primary btn--pill" onClick={() => setPrompting(false)}>
            I&rsquo;m still here
          </button>
          <button
            className="btn btn--outline btn--pill"
            onClick={() => {
              setPrompting(false)
              onTimeout()
            }}
          >
            End session
          </button>
        </div>
      </div>
    </div>
  )
}
