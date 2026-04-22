import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const lineClass = align === 'center' ? 'gold-line' : 'gold-line gold-line-left'

  return (
    <div className={`mb-16 ${alignClass}`}>
      {subtitle && (
        <ScrollReveal delay={0}>
          <p className={`font-accent text-3xl ${light ? 'text-antique-gold' : 'text-champagne-gold'} mb-3`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className={`text-h1 font-heading tracking-wider ${light ? 'text-forest-green' : 'text-antique-gold'}`}>
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className={lineClass} />
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.3}>
          <p className={`mt-6 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-charcoal' : 'text-cream/80'}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
