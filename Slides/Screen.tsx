import React from 'react'
const code = `export className Screen {
    constructor(scale, canvas) {
        this.display = new Array(32 * 64).fill(0);
        this.scale = scale;
                    
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.colors = {
            fill: '#000',
            bg: 'white',
        };
                    
        this.canvas.width = COLS * this.scale;
        this.canvas.height = ROWS * this.scale;
    }
}`

export const Screen = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 mb-8">
          <span className="text-white">Screen</span>
        </div>
        <ul>
          <li>64×32 pixels</li>
          <li>Monochrome</li>
        </ul>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-2"
          >
            {code}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-3"
          >
            {code}
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
            {code}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-11"
          >
            {code}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre className="!shadow-none">
          <code
            className="!bg-transparent javascript"
            data-trim
            data-noescape
            data-line-numbers="1-16"
          >
            {code}
          </code>
        </pre>
      </section>
    </>
  )
}
