import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Product } from '../App'

const modalImageUrl =
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80'

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(12px)',
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const },
  },
}

const shellVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.88,
    rotateX: 14,
    filter: 'blur(14px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.52,
      ease: [0.16, 1, 0.3, 1] as const,
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    rotateX: -8,
    filter: 'blur(10px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
      opacity: { duration: 0.22 },
    },
  },
}

const panelVariants = {
  hidden: { opacity: 0, scale: 0.975 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.08, duration: 0.34, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
  },
}

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, product])

  const productVisualLabel = product?.form.toLowerCase().includes('syrup')
    ? 'Syrup range preview'
    : product?.form.toLowerCase().includes('tablet')
      ? 'Tablet range preview'
      : 'Product range preview'

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="product-modal-shell"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shellVariants}
            onClick={(event) => event.stopPropagation()}
            style={{ transformOrigin: 'center top' }}
          >
            <span className="modal-shell-glow modal-shell-glow-one" aria-hidden="true"></span>
            <span className="modal-shell-glow modal-shell-glow-two" aria-hidden="true"></span>

            <motion.div
              className="product-modal"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={panelVariants}
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
            >
              <div className="modal-layout">
                <motion.div
                  className="modal-media"
                  initial={{ opacity: 0, x: -30, scale: 0.94 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.97 }}
                  transition={{ delay: 0.06, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="modal-media-frame">
                    <img src={modalImageUrl} alt={product.name} />
                    <div className="modal-media-badge">
                      <span>Product visual</span>
                      <strong>{productVisualLabel}</strong>
                    </div>
                  </div>
                  <div className="modal-media-note">
                    <span>Presentation note</span>
                    <p>
                      Placeholder visual for current range. Final tablet or syrup packshot can
                      be replaced later without changing the layout.
                    </p>
                  </div>
                </motion.div>

                <div className="modal-content">
                  <motion.div
                    className="modal-topbar"
                    custom={0.1}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                  >
                    <div className="modal-chip-row">
                      <span className="product-chip">{product.category}</span>
                      <span className="modal-form-chip">{product.form}</span>
                    </div>
                    <button
                      type="button"
                      className="modal-close"
                      aria-label="Close modal"
                      onClick={onClose}
                    >
                      ×
                    </button>
                  </motion.div>

                  <motion.div
                    custom={0.16}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                  >
                    <h3 id="product-modal-title">{product.name}</h3>
                    <p className="modal-summary">{product.description}</p>
                  </motion.div>

                  <motion.div
                    className="modal-focus-banner"
                    custom={0.22}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                  >
                    <span>Primary focus</span>
                    <strong>{product.focus}</strong>
                  </motion.div>

                  <motion.div
                    className="modal-grid"
                    custom={0.28}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                  >
                    <div className="modal-card">
                      <span>Dosage form</span>
                      <strong>{product.form}</strong>
                    </div>
                    <div className="modal-card">
                      <span>Pack size</span>
                      <strong>{product.pack}</strong>
                    </div>
                  </motion.div>

                  <motion.div
                    className="modal-benefits"
                    custom={0.34}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                  >
                    <span>Key positioning points</span>
                    <ul>
                      {product.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
