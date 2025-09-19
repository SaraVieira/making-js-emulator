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

          <p className="fragment">#BADA55</p>
          <p className="fragment">BA DA 55</p>
          <p className="fragment">
            B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-400">A</span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              (11*16<sup>1</sup>) +
              <span className="text-yellow-400">
                (10*16<sup>0</sup>)<br />
              </span>
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              {' '}
              (11 * 16) + (10 * 1)
              <br />
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 186 </span>
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Hex colors</span>

          <p className="fragment">#BADA55</p>
          <p className="fragment">(186) DA 55</p>
          <p className="fragment">
            D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-400">A</span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              (13*16<sup>1</sup>) +
              <span className="text-yellow-400">
                (10*16<sup>0</sup>)<br />
              </span>
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              {' '}
              (13 * 16) + (10 * 1)
              <br />
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 218 </span>
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Hex colors</span>

          <p className="fragment">#BADA55</p>
          <p className="fragment">(186) (218) 55</p>
          <p className="fragment">
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-400">5</span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              (5*16<sup>1</sup>) +
              <span className="text-yellow-400">
                (5*16<sup>0</sup>)<br />
              </span>
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4">
              {' '}
              (5 * 16) + (5 * 1)
              <br />
            </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 85 </span>
          </p>
          <p className="fragment flex flex-col gap-2 w-full">
            <span className="pt-4"> 186 218 85 </span>
          </p>
        </div>
      </section>
      <section>
        <div className="bg-[#BADA55] w-[300px] h-[300px] !mx-auto !mb-4"></div>
        <span>rgb(186, 218, 85)</span>
      </section>
    </>
  )
}
