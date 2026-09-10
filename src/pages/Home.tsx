import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import IconTile from '../components/IconTile'
import {
  IconArchive, IconBook, IconLayout, IconPrint, IconStore, IconTemplate,
} from '../components/Icons'
import './home.css'

const MODULES = [
  { icon: <IconLayout />, title: 'Медиа', desc: 'Публикации и исследования' },
  { icon: <IconBook />, title: 'Издательство', desc: 'Книги, журналы, каталоги' },
  { icon: <IconPrint />, title: 'Типография', desc: 'Тираж и цифровая печать' },
  { icon: <IconArchive />, title: 'Архив', desc: 'Сохранение истории Севера' },
  { icon: <IconStore />, title: 'Маркет', desc: 'Товары и работы авторов' },
  { icon: <IconTemplate />, title: 'Студия', desc: 'Инструменты для создателей' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__photo">
          <Photo variant={1} ratio="21 / 9" label="Северное побережье" />
          <div className="hero__overlay">
            <div className="container">
              <h1 className="hero__title">
                ПРАВДА
                <br />
                СЕВЕРА
              </h1>
              <p className="hero__sub">ЦИФРОВОЙ ИЗДАТЕЛЬСКИЙ ДОМ</p>
              <p className="hero__desc">
                Медиа, издательство, типография, архив — платформа для
                создателей.
              </p>
              <div className="hero__actions">
                <Link to="/studio" className="btn btn--accent">Создать проект</Link>
                <Link to="/about" className="btn">Узнать больше</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="module-grid">
            {MODULES.map((m) => (
              <IconTile key={m.title} icon={m.icon} title={m.title} desc={m.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
