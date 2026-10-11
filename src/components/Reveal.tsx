import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  scale?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 30,
  scale = 0.98,
  once = false,
}: RevealProps) {
  const axis =
    direction === 'left' || direction === 'right'
      ? { x: direction === 'left' ? distance : -distance, y: 0 }
      : { x: 0, y: direction === 'down' ? -distance : distance }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...axis, scale, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
