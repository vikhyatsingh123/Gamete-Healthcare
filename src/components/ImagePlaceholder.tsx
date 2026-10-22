type ImagePlaceholderProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ImagePlaceholder({
  src,
  alt,
  className,
}: ImagePlaceholderProps) {
  return (
    <figure className={`image-placeholder ${className ?? ""}`.trim()}>
      <img src={src} alt={alt} />
    </figure>
  );
}
