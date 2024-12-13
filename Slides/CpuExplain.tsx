import React from 'react'
const arr = `[
  162, 204, 106, 6, 97, 3, 107, 8, 96, 0, 208, 17, 112, 8, 123, 
  255, 59, 0, 18, 10, 113, 2, 122, 255, 58, 0, 18, 6, 102, 0, 103,
  20, 162, 205, 96, 32, 97, 30, 208, 17, 99, 29, 98, 63, 130, 2, 
  119, 255, 71, 0, 18, 170, 255, 10, 162, 203, 210, 49, 101, 255,
  196, 1, 52, 1, 100, 255, 162, 205, 108, 0, 110, 4, 238, 161, 
  108, 254, 110, 6, 238, 161, 108, 2, 208, 17, 128, 196, 208, 17, 
  79, 1, 18, 152, 66, 0, 100, 1, 66, 63, 100, 255, 67, 0, 18, 206, 
  67, 31, 18, 164, 162, 203, 210, 49, 130, 68, 131, 84, 210, 49, 
  63, 1, 18, 66, 67, 30, 18, 152, 106, 2, 250, 24, 118, 1, 162, 
  202, 18, 136, 210, 49, 196, 1, 52, 1, 100, 255, 197, 1, 53, 1, 
  101, 1, 18, 66, 106, 3, 250, 24, 162, 203, 210, 49, 115, 255, 
  18, 54, 162, 203, 210, 49, 18, 40, 162, 205, 208, 17, 162, 240, 
  246, 51, 242, 101, 99, 24, 100, 27, 240, 41, 211, 69, 115, 5, 
  241, 41, 211, 69, 115, 5, 242, 41, 211, 69, 18, 200, 240, 128, 
  255, 255, 162, 222, 99, 21, 98, 16, 211, 37, 162, 227, 99, 29, 
  211, 37, 18, 170, 238, 138, 206, 140, 138, 238, 136, 204, 136
];`
export const CPUExplain = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 mb-8">
          <span className="text-white">The CPU</span>
        </div>
        <ul>
          <li>4096 Memory locations of 8Bits each</li>
          <li>16 8bit data registers</li>
        </ul>
      </section>
      <section>
        <img
          src="/game.png"
          className="!filter-none !m-auto block !max-h-[80vh] w-auto"
        />
      </section>
      <section>
        <pre className="!shadow-none !overflow-visible">
          <code
            className="!bg-transparent javascript !overflow-visible"
            data-trim
            data-noescape
          >
            {arr}
          </code>
        </pre>
      </section>
      <section>
        <span className="!text-3xl text-center">
          <div className="flex gap-20 mx-auto justify-between">
            <span>Hexadecimal notation</span>
            <span>Bitwise operations</span>
          </div>
        </span>
      </section>
    </>
  )
}
