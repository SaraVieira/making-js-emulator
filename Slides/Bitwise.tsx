import React from 'react'

export const Bitwise = () => {
  return (
    <>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Bitwise operators</span>
          <p className="fragment font-mono">& {'->'} 0x12 & 0x10 = 0x10</p>
          <p className="fragment font-mono">| {'->'} 0x12 | 0x10 = 0x12</p>
          <p className="fragment font-mono">^ {'->'} 0x12 ^ 0x10 = 0x2</p>
        </div>
      </section>
    </>
  )
}
