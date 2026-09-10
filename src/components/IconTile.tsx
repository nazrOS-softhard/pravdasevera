import type { ReactNode } from 'react'
import './icontile.css'

interface IconTileProps {
  icon: ReactNode
  title: string
  desc: string
}

export default function IconTile({ icon, title, desc }: IconTileProps) {
  return (
    <div className="icon-tile">
      <div className="icon-tile__icon">{icon}</div>
      <p className="icon-tile__title">{title}</p>
      <p className="icon-tile__desc">{desc}</p>
    </div>
  )
}
