import { useState } from 'react'
import './footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__logo">ПРАВДА СЕВЕРА</p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Платформа</p>
          <p>О нас</p>
          <p>Услуги</p>
          <p>Проекты</p>
          <p>Архив</p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Помощь</p>
          <p>Доставка и оплата</p>
          <p>Вопросы и ответы</p>
          <p>Гарантии</p>
          <p>Контакты</p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Документы</p>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
          <p>Оферта</p>
        </div>

        <div className="footer__news">
          <p className="eyebrow">Подпишитесь на новости</p>
          <p className="footer__news-sub">Узнавайте о новых проектах и событиях первыми.</p>
          <form
            className="footer__news-form"
            onSubmit={(e) => {
              e.preventDefault()
              if (!email.trim()) return
              setSent(true)
            }}
          >
            <input
              type="email"
              required
              placeholder="Ваш e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn--accent btn--sm">Подписаться</button>
          </form>
          {sent && <p className="footer__news-ok">Спасибо, вы подписаны.</p>}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Правда Севера. Все права защищены.</span>
      </div>
    </footer>
  )
}
