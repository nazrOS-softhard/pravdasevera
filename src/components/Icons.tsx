interface IconProps {
  size?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const IconSearch = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
)
export const IconStar = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6z" /></svg>
)
export const IconCart = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><circle cx="9" cy="20" r="1.2" /><circle cx="18" cy="20" r="1.2" /><path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" /></svg>
)
export const IconUser = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></svg>
)
export const IconArrow = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M7 17L17 7" /><path d="M9 7h8v8" /></svg>
)
export const IconTruck = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="2" y="7" width="12" height="9" rx="1" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18.5" r="1.6" /><circle cx="17.5" cy="18.5" r="1.6" /></svg>
)
export const IconPhone = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 5c0 8.5 6.5 15 15 15l2-4-5-2-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-2-5z" /></svg>
)
export const IconMail = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="2.5" y="5" width="19" height="14" rx="1.5" /><path d="M3 6.5l9 6.5 9-6.5" /></svg>
)
export const IconPin = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.4" /></svg>
)
export const IconBook = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /></svg>
)
export const IconPrint = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M6 9V3h12v6" /><rect x="4" y="9" width="16" height="8" rx="1" /><path d="M6 17h12v4H6z" /></svg>
)
export const IconArchive = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="3" y="4" width="18" height="4" rx="1" /><path d="M4 8v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8" /><path d="M10 12h4" /></svg>
)
export const IconStore = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" /><path d="M9 20v-6h6v6" /></svg>
)
export const IconLayout = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18" /><path d="M9 9v11" /></svg>
)
export const IconBox = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>
)
export const IconEdit = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z" /></svg>
)
export const IconTemplate = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>
)
export const IconCube = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 3l8 4.6v9L12 21l-8-4.4v-9z" /><path d="M4 7.6l8 4.4 8-4.4" /><path d="M12 12v9" /></svg>
)
export const IconOneClick = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5V8" /><path d="M12 12l4 2" /></svg>
)
export const IconFilter = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 5h16" /><path d="M7 12h10" /><path d="M10 19h4" /></svg>
)
export const IconVk = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className} strokeWidth={1.4}><path d="M4 4h4c.3 3 2 6.5 4 8V4h4v6c1.7-.6 3.4-3 4-6h4c-.6 3.6-2.6 6.2-4 7.3 1.6 1 3.4 3 4.5 6.7h-4.3c-.8-2.2-2.3-3.8-4.2-4.7v4.7H12c-4.4 0-7.6-3-8-10z" /></svg>
)
export const IconTelegram = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M21 4L3 11l6 2.2M21 4l-3 16-8-6M21 4L9.5 13.2v5" /></svg>
)
