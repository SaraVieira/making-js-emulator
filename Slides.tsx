import Notes from 'reveal.js/plugin/notes/notes.esm'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'

import Appearance from 'reveal.js-appearance/plugin/appearance/appearance.js'
import Reveal from 'reveal.js'

import { useEffect, useRef } from 'react'
import { Intro } from './Slides/Intro'
import { EmuExplain } from './Slides/EmuExplain'
import { Chip8 } from './Slides/Chip8'
import { Screen } from './Slides/Screen'
import { CPUExplain } from './Slides/CpuExplain'
import { Hex } from './Slides/Hex'
import { Switch } from './Slides/Switch'
import { Outro } from './Slides/Outro'
import { Sound } from './Slides/Sound'

const Slides = () => {
  const deckDivRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<any>(null)

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    // @ts-ignore
    deckRef.current = new Reveal(deckDivRef.current, {
      plugins: [Notes, RevealHighlight, Appearance],
      hash: true,
      slideNumber: true,
      controls: false,
      transition: 'none',
    })

    deckRef.current.initialize().then(() => {
      console.log('sup')
    })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.')
      }
    }
  }, [])

  return (
    <div className="reveal" id="reveal" ref={deckDivRef}>
      <div className="slides">
        <Intro />
        <EmuExplain />
        <Chip8 />
        <Screen />
        <Sound />
        <CPUExplain />
        <Hex />
        <Switch />
        <Outro />
      </div>
    </div>
  )
}

export default Slides
