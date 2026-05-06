interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <div
      className={`section-label ${className} ${light ? 'white-text' : ''}`}
      style={light ? { color: 'var(--gold)' } : undefined}
    >
      {children}
    </div>
  )
}
