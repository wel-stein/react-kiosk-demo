import { BackspaceIcon } from './Icons.jsx'

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

export default function OnScreenKeyboard({ onKey, onBackspace, onClear, onDone }) {
  return (
    <div className="osk" role="group" aria-label="On-screen keyboard">
      {ROWS.map((row) => (
        <div key={row[0]} className="osk__row">
          {row.map((key) => (
            <button key={key} className="osk__key" onClick={() => onKey(key.toLowerCase())}>
              {key}
            </button>
          ))}
          {row[0] === 'Z' && (
            <button className="osk__key" onClick={onBackspace} aria-label="Backspace">
              <BackspaceIcon />
            </button>
          )}
        </div>
      ))}
      <div className="osk__row">
        <button className="osk__key osk__key--wide" onClick={onClear}>
          Clear
        </button>
        <button
          className="osk__key osk__key--wide"
          onClick={() => onKey(' ')}
          aria-label="Space"
          style={{ flex: 2 }}
        >
          Space
        </button>
        <button className="osk__key osk__key--wide osk__key--accent" onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  )
}
