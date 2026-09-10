import { IconMail, IconPhone, IconPin, IconTelegram, IconVk } from '../components/Icons'
import Photo from '../components/Photo'
import './contacts.css'

export default function Contacts() {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <h1 className="pagehead__title">Контакты</h1>
          <p className="pagehead__desc">
            Мы всегда на связи. Пишите, звоните или приезжайте в гости.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contacts-grid">
          <div>
            <div className="contact-row">
              <IconPhone />
              <span>+7 (8182) 65-38-78</span>
            </div>
            <div className="contact-row">
              <IconMail />
              <span>info@pravdasevera.ru</span>
            </div>
            <div className="contact-row">
              <IconPin />
              <span>Кузнечихинский проезд, 1-й проезд, 5с2</span>
            </div>

            <div className="contact-social">
              <button aria-label="ВКонтакте"><IconVk /></button>
              <button aria-label="Telegram"><IconTelegram /></button>
            </div>
          </div>

          <div className="contact-map">
            <Photo variant={4} ratio="4 / 3" />
            <span className="contact-map__pin">ПРАВДА СЕВЕРА</span>
          </div>
        </div>
      </section>
    </>
  )
}
