import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { IconFilter } from '../components/Icons'
import './market.css'

const TABS = ['Все', 'Книги', 'Плакаты', 'Открытки', 'Мерч', 'Фото', 'Журналы', 'Винил', 'Другое']

const PRODUCTS = [
  { title: 'Фотокнига «Белое море»', category: 'Книги', price: '2 500 ₽', variant: 1 as const },
  { title: 'Плакат «Тундра»', category: 'Плакаты', price: '1 200 ₽', variant: 2 as const },
  { title: 'Открытка «Маяк»', category: 'Открытки', price: '150 ₽', variant: 3 as const },
  { title: 'Книга «Северный дневник»', category: 'Книги', price: '1 800 ₽', variant: 4 as const },
  { title: 'Тоут-бэг «Правда Севера»', category: 'Мерч', price: '990 ₽', variant: 5 as const },
  { title: 'Свитшот «Север»', category: 'Мерч', price: '3 200 ₽', variant: 1 as const },
  { title: 'Плакат «Кит»', category: 'Плакаты', price: '1 200 ₽', variant: 2 as const },
  { title: 'Набор открыток «Арктика»', category: 'Открытки', price: '400 ₽', variant: 3 as const },
]

export default function Market() {
  const [params] = useSearchParams()
  const initial = params.get('cat') || 'Все'
  const [tab, setTab] = useState(initial)

  const filtered = useMemo(
    () => (tab === 'Все' ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab)),
    [tab],
  )

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <h1 className="pagehead__title">Маркетплейс</h1>
          <p className="pagehead__desc">
            Работы авторов, локальные бренды и коллекционные издания.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="market-controls">
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
            <button className="market-filter" aria-label="Фильтр">
              <IconFilter />
            </button>
          </div>

          <div className="market-grid">
            {filtered.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
