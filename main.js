import Notes from 'reveal.js/plugin/notes/notes.esm'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
import './styles.css'
import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({
  plugins: [Notes, RevealHighlight],
  hash: true,
  slideNumber: true,
  controls: false,
})
