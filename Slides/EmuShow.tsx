import { startChippy } from '@saravieira/chippy'
import React, { useEffect, useRef } from 'react'
export const EmuShow = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    load()
  }, [])
  const load = async () => {
    const file = await fetch('/breakout.ch8').then((response) =>
      response.arrayBuffer(),
    )
    startChippy({
      el: canvas.current!,
      rom: new Uint8Array(file),
      colors: { fill: '#fff', bg: '#000' },
      speed: 5,
    })
  }
  return (
    <section>
      <div className="flex flex-col items-center justify-center relative -top-10">
        <img src="/crt.png" width={680} />
        <canvas
          ref={canvas}
          className="absolute"
          style={{
            width: 473,
            height: 402,
            top: 112,
          }}
        />
      </div>
    </section>
  )
}
