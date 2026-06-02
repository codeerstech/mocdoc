import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { motionPreset } from '../template/theme'

type MotionProps = {
  children: ReactNode
  className?: string
}

export function MotionPage({ children }: MotionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: motionPreset.duration, ease: motionPreset.ease }}
    >
      {children}
    </motion.div>
  )
}

export function Reveal({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: motionPreset.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: motionPreset.duration, ease: motionPreset.ease }}
    >
      {children}
    </motion.div>
  )
}

export function MotionCard({
  children,
  className,
  as = 'article',
}: MotionProps & { as?: 'article' | 'div' }) {
  const Component = as === 'article' ? motion.article : motion.div

  return (
    <Component
      className={className}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.2, ease: motionPreset.ease }}
    >
      {children}
    </Component>
  )
}

export function MotionButton({
  children,
  className,
}: MotionProps) {
  return (
    <motion.span
      className={className}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: motionPreset.ease }}
    >
      {children}
    </motion.span>
  )
}

export function AnimatedMenu({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.nav
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      transition={{ duration: 0.24, ease: motionPreset.ease }}
    >
      {children}
    </motion.nav>
  )
}

export function AnimatedAccordion({ open, children }: MotionProps & { open: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
          transition={{ duration: 0.24, ease: motionPreset.ease }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
