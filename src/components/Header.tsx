import { Link, NavLink } from 'react-router-dom'
import { IconCart, IconSearch, IconStar, IconUser } from './Icons'
import './header.css'

const NAV = [
  { to: '/projects', label: 'Проекты' },
  { to: '/services', label: 'Услуги' },
  { to: '/market?cat=Журналы', label: 'Журналы' },
  { to: '/market', label: 'Магазин' },
  { to: '/archive', label: 'Архив' },
  { to: '/studio', label: 'Студия' },
  { to: '/about', label: 'О нас' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <span>ПРАВДА</span>
          <span>СЕВЕРА</span>
        </Link>

        <nav className="header__nav">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => 'header__link' + (isActive ? ' is-active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Поиск">
            <IconSearch />
          </button>
          <button className="header__icon-btn header__icon-btn--desktop" aria-label="Избранное">
            <IconStar />
          </button>
          <Link to="/market" className="header__icon-btn header__icon-btn--desktop" aria-label="Корзина">
            <IconCart />
          </Link>
          <Link to="/account" className="header__icon-btn" aria-label="Личный кабинет">
            <IconUser />
          </Link>
        </div>
      </div>
    </header>
  )
}
