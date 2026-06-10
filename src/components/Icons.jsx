const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const GlobeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export const CardIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
)

export const CardPlusIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M22 11V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9" />
    <path d="M2 10h20" />
    <path d="M19 15v6" />
    <path d="M16 18h6" />
  </svg>
)

export const SearchIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const BusIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
    <path d="M4 11h16" />
    <path d="M8 4v7" />
    <path d="M16 4v7" />
    <circle cx="8" cy="15" r="0.5" fill="currentColor" />
    <circle cx="16" cy="15" r="0.5" fill="currentColor" />
    <path d="M7 18v2" />
    <path d="M17 18v2" />
  </svg>
)

export const TrainIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 11h14" />
    <circle cx="9" cy="14" r="0.5" fill="currentColor" />
    <circle cx="15" cy="14" r="0.5" fill="currentColor" />
    <path d="m8 21 1.5-4" />
    <path d="m16 21-1.5-4" />
  </svg>
)

export const PersonIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="8" r="4" />
    <path d="M5 21a7 7 0 0 1 14 0" />
  </svg>
)

export const CashIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 6v.01" />
    <path d="M18 18v.01" />
  </svg>
)

export const BankIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="m3 9 9-6 9 6" />
    <path d="M4 9h16" />
    <path d="M6 9v9" />
    <path d="M10 9v9" />
    <path d="M14 9v9" />
    <path d="M18 9v9" />
    <path d="M3 21h18" />
    <path d="M3 18h18" />
  </svg>
)

export const QrIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 14h3v3h-3z" />
    <path d="M21 14v.01" />
    <path d="M14 21v.01" />
    <path d="M18 18v3h3" />
  </svg>
)

export const CheckIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={3}>
    <path d="m5 13 4 4L19 7" />
  </svg>
)

export const ArrowLeftIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
)

export const ArrowRightIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export const PrinterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M6 9V3h12v6" />
    <rect x="6" y="14" width="12" height="7" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  </svg>
)

export const HomeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <path d="M9 21v-8h6v8" />
  </svg>
)

export const PinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const PhoneIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
)

export const BackspaceIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M21 5H9l-6 7 6 7h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
    <path d="m12 9 6 6" />
    <path d="m18 9-6 6" />
  </svg>
)

export const InfoIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
)
