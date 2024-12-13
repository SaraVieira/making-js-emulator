import React from 'react'

export const Chip8 = () => (
  <>
    <section>
      <span className="!text-8xl !text-white"> CHIP-8 </span>
    </section>
    <section>
      <div className="grid grid-cols-4 gap-8 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8 justify-start text-xl">
          <img src="/cpu.png" width="200" height="200" />
          <span>Hardware</span>
        </div>
        <div className="flex flex-col gap-8 text-xl">
          <img src="/screen.png" width="200" height="200" />
          <span>Screen</span>
        </div>
        <div className="flex flex-col gap-8 text-xl">
          <img src="/keyboard.png" width="200" height="200" />
          <span>Keyboard</span>
        </div>
        <div className="flex flex-col gap-8 text-xl">
          <img src="/sound.png" width="200" height="200" />
          <span>Sound</span>
        </div>
      </div>
      <aside className="notes">asjdhak</aside>
    </section>
  </>
)
