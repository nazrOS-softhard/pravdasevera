import Photo from './Photo'
import { IconArrow } from './Icons'
import './projectcard.css'

interface ProjectCardProps {
  title: string
  category: string
  variant: 1 | 2 | 3 | 4 | 5
}

export default function ProjectCard({ title, category, variant }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Photo variant={variant} ratio="4 / 5" />
      <div className="project-card__row">
        <div>
          <p className="project-card__title">{title}</p>
          <p className="project-card__cat">{category}</p>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <IconArrow />
        </span>
      </div>
    </article>
  )
}
