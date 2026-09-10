import type { ReactNode } from 'react'
import Photo from './Photo'
import './servicecard.css'

interface ServiceCardProps {
  title: string
  variant: 1 | 2 | 3 | 4 | 5
  photo?: boolean
  icon?: ReactNode
  accent?: boolean
}

export default function ServiceCard({ title, variant, photo = true, icon, accent }: ServiceCardProps) {
  return (
    <article className={'service-card' + (accent ? ' is-accent' : '')}>
      {photo ? (
        <Photo variant={variant} ratio="1 / 1" />
      ) : (
        <div className="service-card__icon">{icon}</div>
      )}
      <p className="service-card__title">{title}</p>
    </article>
  )
}
