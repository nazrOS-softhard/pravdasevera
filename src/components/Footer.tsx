import { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__logo">ПРАВДА СЕВЕРА</p>
          <p className="footer__address">
            Архангельск, набережная Северной Двины, 26
          </p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Платформа</p>
          <Link to="/about">О нас</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/projects">Проекты</Link>
          <Link to="/archive">Архив</Link>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Помощь</p>
          <Link to="/contacts">Доставка и оплата</Link>
          <Link to="/contacts">Вопросы и ответы</Link>
          <Link to="/contacts">Гарантии</Link>
          <Link to="/contacts">Контакты</Link>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Документы</p>
          <Link to="/contacts">Пользовательское соглашение</Link>
          <Link to="/contacts">Политика конфиденциальности</Link>
          <Link to="/contacts">Оферта</Link>
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
