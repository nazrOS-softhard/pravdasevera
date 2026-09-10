import Photo from '../components/Photo'
import StatBlock from '../components/StatBlock'
import './about.css'

const STATS = [
  { value: '10+', label: 'лет опыта' },
  { value: '2000+', label: 'реализованных проектов' },
  { value: '50 000+', label: 'напечатанных книг' },
  { value: '500+', label: 'авторов и партнёров' },
]

const VALUES = [
  { title: 'Честность', desc: 'Мы говорим и делаем то, что действительно важно.' },
  { title: 'Качество', desc: 'Внимание к каждой детали в любом проекте.' },
  { title: 'Открытость', desc: 'Сотрудничаем и делимся знаниями.' },
  { title: 'Север', desc: 'Поддерживаем культуру и людей региона.' },
]

export default function About() {
  return (
    <>
      <section className="pagehead">
        <div className="container about-head">
          <div>
            <h1 className="pagehead__title">О нас</h1>
            <p className="pagehead__desc">
              Мы объединяем людей, идеи и технологии, чтобы сохранять,
              создавать и распространять важные смыслы Севера. От первой
              строчки до готового издания — всё в одном месте.
            </p>
          </div>
          <Photo variant={2} ratio="4 / 3" label="Мастерская" />
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
          <p className="eyebrow" style={{ marginBottom: 24 }}>Наши ценности</p>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
