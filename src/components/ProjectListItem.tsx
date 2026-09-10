import Photo from './Photo'
import './projectlistitem.css'

interface ProjectListItemProps {
  title: string
  meta: string
  status: string
  progress: number
  action: string
  variant: 1 | 2 | 3 | 4 | 5
  outline?: boolean
}

export default function ProjectListItem({
  title,
  meta,
  status,
  progress,
  action,
  variant,
  outline,
}: ProjectListItemProps) {
  return (
    <div className="plist-item">
      <div className="plist-item__photo">
        <Photo variant={variant} ratio="1 / 1" />
      </div>
      <div className="plist-item__body">
        <p className="plist-item__title">{title}</p>
        <p className="plist-item__meta">{meta}</p>
        <div className="plist-item__bar">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="plist-item__status">{status}</p>
      </div>
      <button className={'btn btn--sm' + (outline ? '' : ' btn--accent')}>{action}</button>
    </div>
  )
}
