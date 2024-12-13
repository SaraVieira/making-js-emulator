import { startChippy } from '@saravieira/chippy'
import React, { useEffect, useRef } from 'react'
import { EmuShow } from './EmuShow'

export const Outro = () => {
  return (
    <>
      <section>
        <div className="mx-auto text-center justify-center">
          <span>
            Now, <span className="text-yellow-400">the emulator</span>{' '}
          </span>
        </div>
      </section>
      <EmuShow />
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="block mb-8">You can install it</span>
          <pre>
            <code className="bash text-center">npm i @saravieira/chippy</code>
          </pre>
        </div>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span>Thank you</span>

          <div className="flex gap-36 mt-12 justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              <img src="/website.png" className="!max-w-[200px]" />
              Slides
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img src="/bsky.png" className="!max-w-[200px]" />
              My Bluesky
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
