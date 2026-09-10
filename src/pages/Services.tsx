import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import { IconTruck } from '../components/Icons'
import './services.css'

const TABS = ['Все услуги', 'Издательство', 'Типография', 'Дизайн', 'Доставка']

const SERVICES = [
  { title: 'Книги и журналы', variant: 1 as const, tab: 'Издательство' },
  { title: 'Полиграфия', variant: 2 as const, tab: 'Типография' },
  { title: 'Упаковка', variant: 3 as const, tab: 'Типография' },
  { title: 'Дизайн и вёрстка', variant: 4 as const, tab: 'Дизайн' },
]

export default function Services() {
  const [tab, setTab] = useState('Все услуги')
  const filtered = tab === 'Все услуги' ? SERVICES : SERVICES.filter((s) => s.tab === tab)

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <h1 className="pagehead__title">Услуги</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tabs">
            {TABS.map((t) => (
              <button
                key={t}
                className={'tabs__item' + (tab === t ? ' is-active' : '')}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filtered.map((s) => (
              <ServiceCard key={s.title} title={s.title} variant={s.variant} />
            ))}
            <ServiceCard
              title="Доставка"
              variant={5}
              photo={false}
              accent
              icon={<IconTruck size={32} />}
            />
          </div>
        </div>
      </section>
    </>
  )
}
