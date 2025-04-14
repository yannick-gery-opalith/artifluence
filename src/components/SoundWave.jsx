import React, { useEffect, useRef } from 'react'

import SiriWave from 'siriwave'

const SoundWave = ({ id, height = 200, delay = 0, style = {} }) => {
  const containerRef = useRef(null)
  const siriWaveRef = useRef(null)

  useEffect(() => {
    // Apply the delay before initialization
    const timer = setTimeout(() => {
      if (containerRef.current && !siriWaveRef.current) {
        siriWaveRef.current = new SiriWave({
          container: containerRef.current,
          width: containerRef.current.offsetWidth,
          height: height,
          style: 'ios9', // you can change this to 'ios' for different style
          speed: 0.2,
          amplitude: 1
        })
      }
    }, delay)

    // Handle window resize
    const handleResize = () => {
      if (siriWaveRef.current) {
        siriWaveRef.current.setWidth(containerRef.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)

      if (siriWaveRef.current) {
        siriWaveRef.current.dispose()
      }
    }
  }, [height, delay])

  return (
    <div id={`siri-container-${id}`} ref={containerRef} style={{ width: '100%', height: `${height}px`, ...style }} />
  )
}

export default SoundWave
