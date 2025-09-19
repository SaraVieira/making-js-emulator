import React from 'react'

export const Bitwise = () => {
  return (
    <>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Bitwise operators</span>
          <p className="fragment font-mono">& {'->'} 0x11 & 0x10 = 0x10</p>
          <p className="fragment font-mono">| {'->'} 0x11 | 0x10 = 0x11</p>
          <p className="fragment font-mono">^ {'->'} 0x11 ^ 0x10 = 0x1</p>
        </div>
      </section>
    </>
  )
}
