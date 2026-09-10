import Photo from '../components/Photo'
import IconTile from '../components/IconTile'
import { IconEdit, IconOneClick, IconCube, IconTemplate } from '../components/Icons'
import './studio.css'

const FEATURES = [
  { icon: <IconEdit />, title: 'Онлайн-редактор', desc: 'Удобный редактор для книг, журналов и других изданий' },
  { icon: <IconTemplate />, title: 'Шаблоны', desc: 'Готовые шаблоны для быстрого старта проекта' },
  { icon: <IconCube />, title: '3D-превью', desc: 'Просмотр будущего издания в 3D перед печатью' },
  { icon: <IconOneClick />, title: 'Печать в 1 клик', desc: 'Отправляйте макет в печать без лишней переписки' },
]

export default function Studio() {
  return (
    <>
      <section className="pagehead">
        <div className="container studio-head">
          <div>
            <h1 className="pagehead__title">Студия</h1>
            <p className="pagehead__desc">
              Инструменты для авторов и дизайнеров. Создавайте, вёрстайте и
              заказывайте печать прямо на платформе.
            </p>
            <div className="studio-head__actions">
              <button className="btn btn--accent">Создать проект</button>
              <button className="btn">Смотреть шаблоны</button>
            </div>
          </div>
          <div className="studio-head__mock">
            <Photo variant={3} ratio="4 / 3" />
            <p className="studio-head__mock-caption">Север как состояние</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="studio-features">
            {FEATURES.map((f) => (
              <IconTile key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
