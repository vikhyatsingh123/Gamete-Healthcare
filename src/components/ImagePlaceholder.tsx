type ImagePlaceholderProps = {
  src: string
  alt: string
  label: string
  caption: string
  className?: string
}

export function ImagePlaceholder({ src, alt, label, caption, className }: ImagePlaceholderProps) {
  return (
    <figure className={`image-placeholder ${className ?? ''}`.trim()}>
      <img src={src} alt={alt} />
      <figcaption>
        <strong>{label}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}
