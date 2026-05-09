interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <div
      className={`section-label ${className} ${light ? 'section-label--light' : ''}`}
    >
      {children}
    </div>
  )
}