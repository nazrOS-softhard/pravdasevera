import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import './projects.css'

const TABS = ['Все', 'Книги', 'Журналы', 'Каталоги', 'Упаковка', 'Мерч', 'Другое']

const PROJECTS = [
  { title: 'Северные истории', category: 'Книга', tab: 'Книги', variant: 1 as const },
  { title: 'Море внутри', category: 'Фотокнига', tab: 'Книги', variant: 2 as const },
  { title: 'Вещи Севера', category: 'Каталог', tab: 'Каталоги', variant: 3 as const },
  { title: 'Территория холода', category: 'Журнал', tab: 'Журналы', variant: 4 as const },
  { title: 'Анатомия города', category: 'Книга', tab: 'Книги', variant: 5 as const },
  { title: 'Полярный дневник', category: 'Блокнот', tab: 'Другое', variant: 1 as const },
  { title: '365 Север', category: 'Календарь', tab: 'Другое', variant: 2 as const },
  { title: 'Упаковка для чая', category: 'Упаковка', tab: 'Упаковка', variant: 3 as const },
]

export default function Projects() {
  const [tab, setTab] = useState('Все')
  const filtered = tab === 'Все' ? PROJECTS : PROJECTS.filter((p) => p.tab === tab)

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <h1 className="pagehead__title">Проекты</h1>
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

          <div className="projects-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.title} title={p.title} category={p.category} variant={p.variant} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
