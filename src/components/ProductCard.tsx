import Photo from './Photo'
import './productcard.css'

interface ProductCardProps {
  title: string
  category: string
  price: string
  variant: 1 | 2 | 3 | 4 | 5
}

export default function ProductCard({ title, category, price, variant }: ProductCardProps) {
  return (
    <article className="product-card">
      <Photo variant={variant} ratio="1 / 1" />
      <div className="product-card__body">
        <p className="product-card__title">{title}</p>
        <p className="product-card__cat">{category}</p>
        <p className="product-card__price">{price}</p>
      </div>
    </article>
  )
}
