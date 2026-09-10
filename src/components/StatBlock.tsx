import './stats.css'

interface StatProps {
  value: string
  label: string
}

export default function StatBlock({ value, label }: StatProps) {
  return (
    <div className="stat">
      <p className="stat__value">{value}</p>
      <p className="stat__label">{label}</p>
    </div>
  )
}
