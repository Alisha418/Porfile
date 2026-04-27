import { useEffect, useState } from 'react'

/**
 * Types `text` character-by-character; respects prefers-reduced-motion.
 */
export function useTypingEffect(text, options = {}) {
  const speed = options.speed ?? 52
  const startDelay = options.startDelay ?? 280
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!text) {
      setDisplayed('')
      setDone(true)
      return
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setDisplayed(text)
      setDone(true)
      return
    }

    let intervalId
    let i = 0

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          window.clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
