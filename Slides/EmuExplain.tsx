import React from 'react'

export const EmuExplain = () => (
  <>
    <section>
      <span className="!text-8xl">
        What is
        <span className="text-yellow-400"> emulation?</span>
      </span>
    </section>
    <section>
      <div className="grid grid-cols-2 gap-8 max-w-[600px] mx-auto">
        <div className="flex flex-col gap-8">
          <img src="/cpu.png" className="w-auto h-[288px]" />
          <span>Hardware</span>
        </div>
        <div className="flex flex-col gap-8 fragment">
          <img src="/software.png" className="w-auto h-[288px]" />
          <span>Software</span>
        </div>
      </div>
      <aside className="notes">
        We will talk about software emulation. In computing, an emulator is
        hardware or software that enables one computer system (called the host)
        to behave like another computer system (called the guest).
        <br />
        An emulator typically enables the host system to run software or use
        peripheral devices designed for the guest system. Emulation refers to
        the ability of a computer program in an electronic device to emulate (or
        imitate) another program or device.
      </aside>
    </section>
    <section>
      <span className="!text-8xl">
        Why in
        <span className="text-yellow-400"> JavaScript</span>
      </span>
    </section>
  </>
)
