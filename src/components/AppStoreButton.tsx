import { Apple, ArrowUpRight } from 'lucide-react'

const appStoreUrl = 'https://apps.apple.com/vn/app/nanu/id6761140863'

export function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-button ${compact ? 'app-store-button--compact' : ''}`}
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Descargar NANU en App Store (abre en una nueva pestaña)"
    >
      <Apple aria-hidden="true" fill="currentColor" />
      <span>
        <small>Descárgala en el</small>
        App Store
      </span>
      {!compact && <ArrowUpRight className="app-store-arrow" aria-hidden="true" />}
    </a>
  )
}
