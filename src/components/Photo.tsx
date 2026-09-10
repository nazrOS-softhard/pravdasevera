import './photo.css'

interface PhotoProps {
  label?: string
  variant?: 1 | 2 | 3 | 4 | 5
  ratio?: string
  className?: string
}

/**
 * Stand-in for the grayscale documentary photography used throughout the
 * mockup (icebergs, workshops, archive prints). Swap the background with a
 * real photo later — same aspect ratio and overlay treatment.
 */
export default function Photo({ label, variant = 1, ratio = '4 / 3', className = '' }: PhotoProps) {
  return (
    <div
      className={`photo photo--v${variant} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {label && <span className="photo__label">{label}</span>}
    </div>
  )
}
