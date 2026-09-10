import { useState } from 'react'
import ProjectListItem from '../components/ProjectListItem'
import './account.css'

const SIDEBAR = ['Профиль', 'Мои проекты', 'Заказы', 'Избранное', 'Сообщения', 'Адреса', 'Настройки']

const PROJECTS = [
  { title: 'Северные истории', meta: 'Формат 170×240 мм · Тираж 100 экз.', status: 'В печати · 80%', progress: 80, action: 'Открыть', variant: 1 as const },
  { title: 'Полярный дневник', meta: 'Формат 145×205 мм · Тираж 50 экз.', status: 'Готов', progress: 100, action: 'Заказать ещё', variant: 2 as const },
  { title: 'Анатомия города', meta: 'Формат 200×270 мм · Тираж 1 экз.', status: 'Доставлено', progress: 100, action: 'Повторить', variant: 3 as const, outline: true },
  { title: 'Упаковка для чая', meta: 'Тираж 1000 шт.', status: 'Черновик', progress: 20, action: 'Продолжить', variant: 4 as const, outline: true },
]

export default function Account() {
  const [active, setActive] = useState('Мои проекты')

  return (
    <section className="account">
      <div className="container account__inner">
        <div className="account__topbar">
          <div className="account__avatar">ИИ</div>
          <div>
            <p className="account__name">Иван Иванов</p>
            <p className="account__email">ivanov@mail.ru</p>
          </div>
        </div>

        <div className="account__layout">
          <aside className="account__sidebar">
            {SIDEBAR.map((item) => (
              <button
                key={item}
                className={'account__sidebar-item' + (active === item ? ' is-active' : '')}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
            <button className="account__sidebar-item account__sidebar-item--exit">Выход</button>
          </aside>

          <div className="account__content">
            <h1 className="pagehead__title account__title">Мои проекты</h1>
            <div className="account__list">
              {PROJECTS.map((p) => (
                <ProjectListItem key={p.title} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
