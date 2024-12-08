import Notes from 'reveal.js/plugin/notes/notes.esm'
import './styles.css'
import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({
  plugins: [Notes],
  hash: true,
  slideNumber: true,
  controls: false,
})
