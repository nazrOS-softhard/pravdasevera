import { useMemo, useState } from 'react'
import Photo from '../components/Photo'
import StatBlock from '../components/StatBlock'
import { IconSearch } from '../components/Icons'
import './archive.css'

const STATS = [
  { value: '120 000+', label: 'документов' },
  { value: '45 000+', label: 'фотографий' },
  { value: '8 000+', label: 'карт' },
  { value: '300+', label: 'часов интервью' },
]

const TABS = ['Популярное', 'Изображения', 'Карты', 'Фото', 'Документы']

const RECENT = [
  { title: 'Порт, 1958', variant: 1 as const },
  { title: 'Экспедиция, 1971', variant: 2 as const },
  { title: 'Улица Поморская', variant: 3 as const },
  { title: 'Собор, архив', variant: 4 as const },
]

export default function Archive() {
  const [tab, setTab] = useState('Популярное')
  const [query, setQuery] = useState('')

  const items = useMemo(() => RECENT, [tab])

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <h1 className="pagehead__title">Архив</h1>
          <p className="pagehead__desc">
            Цифровой архив Севера. Документы, фотографии, карты, газеты и
            истории, которые важно сохранить.
          </p>

          <form
            className="archive-search"
            onSubmit={(e) => e.preventDefault()}
          >
            <IconSearch className="archive-search__icon" />
            <input
              type="search"
              placeholder="Поиск по архиву"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

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
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          {STATS.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 20 }}>Новые поступления</p>
          <div className="archive-grid">
            {items
              .filter((i) => i.title.toLowerCase().includes(query.trim().toLowerCase()))
              .map((i) => (
                <div className="archive-item" key={i.title}>
                  <Photo variant={i.variant} ratio="1 / 1" />
                  <p>{i.title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
