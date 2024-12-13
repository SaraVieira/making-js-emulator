import React from 'react'

export const Hex = () => {
  return (
    <>
      <section data-auto-animate>
        <span className="!text-6xl text-center">
          <div className="mx-auto text-center justify-center">
            <span className="text-white">Hexadecimal notation</span>
          </div>
          <div className="fragment">
            <p>Decimal: 0-9</p>
            <p>Hexadecimal: 0-F</p>
          </div>
        </span>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Hex colors</span>

          <p className="fragment">#FFFFFF</p>
          <p className="fragment">FF FF FF</p>
          <p className="fragment">
            F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-400">F</span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              (15*16<sup>1</sup>) +
              <span className="text-yellow-400">
                (15*16<sup>0</sup>)<br />
              </span>
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              {' '}
              (15 * 16) + (15 * 1)
              <br />
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 255 </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 255 255 255 </span>
          </p>
        </div>
      </section>
      <section>
        <div className="bg-white w-[300px] h-[300px] !mx-auto !mb-4"></div>
        <span>rgb(255, 255, 255)</span>
      </section>
    </>
  )
}
