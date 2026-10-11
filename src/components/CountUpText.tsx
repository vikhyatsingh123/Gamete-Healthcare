import { useInView, useReducedMotion } from 'framer-motion'
import { createElement, useEffect, useMemo, useRef, useState } from 'react'

type CountUpTextProps = {
  value: string
  as?: 'span' | 'strong' | 'div'
  className?: string
  duration?: number
}

export function CountUpText({
  value,
  as = 'span',
  className,
  duration = 1.4,
}: CountUpTextProps) {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.55 })
  const prefersReducedMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(value)

  const parsedValue = useMemo(() => {
    const match = value.match(/(\d+(?:\.\d+)?)/)

    if (!match || match.index === undefined) {
      return null
    }

    const numericPart = match[0]
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + numericPart.length)
    const decimals = numericPart.includes('.') ? numericPart.split('.')[1].length : 0
    const leadingZeros = /^0\d+$/.test(numericPart) ? numericPart.length : 0

    return {
      target: Number.parseFloat(numericPart),
      prefix,
      suffix,
      decimals,
      leadingZeros,
    }
  }, [value])

  useEffect(() => {
    if (!parsedValue) {
      setDisplayValue(value)
      return
    }

    if (!isInView || prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    let frameId = 0
    let startTime = 0

    const formatValue = (nextValue: number) => {
      const rounded = nextValue.toFixed(parsedValue.decimals)
      const [integerPart, decimalPart] = rounded.split('.')
      const paddedInteger = parsedValue.leadingZeros
        ? integerPart.padStart(parsedValue.leadingZeros, '0')
        : integerPart
      const composedNumber = decimalPart ? `${paddedInteger}.${decimalPart}` : paddedInteger

      return `${parsedValue.prefix}${composedNumber}${parsedValue.suffix}`
    }

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      const nextValue = parsedValue.target * eased

      setDisplayValue(formatValue(nextValue))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step)
        return
      }

      setDisplayValue(value)
    }

    setDisplayValue(formatValue(0))
    frameId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, parsedValue, prefersReducedMotion, value])

  return createElement(as, { className, ref }, displayValue)
}