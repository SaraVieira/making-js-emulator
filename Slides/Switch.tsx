import React from 'react'
import { fullSwitch, smallSwitch, second, third } from './code'
import { Bitwise } from './Bitwise'

export const Switch = () => {
  return (
    <>
      <section>
        <div className="mx-auto flex-col flex text-center justify-center">
          <span className="text-white">So, we have instructions</span>
          <span className="fragment">What next?</span>
        </div>
      </section>
      <section>
        <iframe
          className="w-full h-[600px]"
          src="https://en.wikipedia.org/wiki/CHIP-8#Opcode_table"
        />
      </section>
      <section>
        <div className="mx-auto flex-col flex text-center justify-center">
          <span className="text-white">We tell the computer what to do</span>
        </div>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-3"
          >
            {smallSwitch}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-7"
          >
            {smallSwitch}
          </code>
        </pre>
      </section>

      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-20"
          >
            {smallSwitch}
          </code>
        </pre>
      </section>
      <Bitwise />
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-30"
          >
            {smallSwitch}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-30"
          >
            {second}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-30"
          >
            {third}
          </code>
        </pre>
      </section>
      <section>
        <div className="mx-auto text-center justify-center">
          <span className="text-white">Now the all code</span>
        </div>
      </section>
      <section data-auto-animate className="relative">
        <pre className="!shadow-none relative overflow-scroll h-full min-h-[600px]">
          <code
            className="!bg-transparent javascript auto-scroll"
            data-trim
            data-noescape
          >
            {fullSwitch}
          </code>
        </pre>
      </section>
    </>
  )
}
